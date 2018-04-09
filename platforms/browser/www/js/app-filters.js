bangmaster.filter('bangmaster_animate', function () {
    return function (text) {
        var animatespeed = parseInt(text) * 1200;
        return animatespeed;
    };
})

bangmaster.filter('bangmaster_timer', function () {
    return function (text) {
        var milliseconds = '';
        var original = text;
        if(parseInt(text) < 10) {
            text = text.toString();
            text = text.split("");
            milliseconds = '0' + text[0] + ':' + text[2] + text[3];
        } else {
            text = text.toString();
            text = text.split("");
            milliseconds = text[0] + text[1] + ':' + text[3] + text[4];
        }
        if(parseFloat(original) == 0.00) {
            milliseconds = '00:00';
        }
        return milliseconds;
    };
})