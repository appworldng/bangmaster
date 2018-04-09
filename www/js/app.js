//Define Angular Application
var bangmaster = angular.module('bangmaster', ['ngRoute', 'ngAnimate']);
bangmaster.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view1.html',
            controller: 'Controller1'
        })
        .when('/view2', {
            templateUrl: 'views/view2.html',
            controller: 'Controller2'
        })
        .when('/view3', {
            templateUrl: 'views/view3.html',
            controller: 'Controller3'
        })
        .when('/view4', {
            templateUrl: 'views/view4.html',
            controller: 'Controller4'
        })
        .when('/view5', {
            templateUrl: 'views/view5.html',
            controller: 'Controller5'
        })
        .when('/view6', {
            templateUrl: 'views/view6.html',
            controller: 'Controller6'
        })
        .when('/view7', {
            templateUrl: 'views/view7.html',
            controller: 'Controller7'
        })
        .when('/view8', {
            templateUrl: 'views/view8.html',
            controller: 'Controller8'
        })
        .when('/view9', {
            templateUrl: 'views/view9.html',
            controller: 'Controller9'
        });
});