bangmaster.directive('viewportChecker', function() {
    return {
        link: function(scope, element) {
            element.addClass("transparent").viewportChecker({
                offset: '10%',
                callbackFunction: function(element, action) {
                    var data = ($(element).data('effect') || 'fadeIn').split(/\s+/g);
                    if (data.length < 2) data.push('0');
                    setTimeout(function() {
                        element.removeClass('transparent').addClass('animated ' + data[0]);
                    }, parseInt(data[1]));
                }
            });
        }
    };
});

bangmaster.directive('back', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);

// Add this directive where you keep your directives
bangmaster.directive('onLongPress', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function ($scope, $elm, $attrs) {
            $elm.bind('touchstart', function (evt) {
                // Locally scoped variable that will keep track of the long press
                $scope.longPress = true;
                var functionHandler = $parse($attrs.onLongPress);
                // We'll set a timeout for 600 ms for a long press
                $timeout(function () {
                    if ($scope.longPress) {
                        // If the touchend event hasn't fired,
                        // apply the function given in on the element's on-long-press attribute
                        $scope.$apply(function () {
                            functionHandler($scope, {$event: evt});
                        });
                    }
                }, 600);
            });

            $elm.bind('touchend', function (evt) {
                // Prevent the onLongPress event from firing
                $scope.longPress = false;
				//var functionHandler = $parse($attrs.onLongPress);
				var functionHandler = $parse($attrs.onTouchEnd);
                // If there is an on-touch-end function attached to this element, apply it
                if ($attrs.onTouchEnd) {
                    $scope.$apply(function () {
                        functionHandler($scope, {$event: evt});
                    });
                }
            });
        }
    };
});