bangmaster.run(function($rootScope) {
    //All beats...
    $rootScope.beats = [
        {"name": "African Calypso", "speed": "121", "wav": "bangmaster_african_1.ogg"},
        {"name": "African Native", "speed": "123", "wav": "bangmaster_african_2.ogg"},
        {"name": "African Fela", "speed": "99", "wav": "bangmaster_african_3.ogg"},  
        {"name": "African Tuface", "speed": "104", "wav": "bangmaster_african_4.ogg"},
        {"name": "African 3/4 Trap", "speed": "145", "wav": "bangmaster_african_5.ogg"},
        {"name": "African Yoruba", "speed": "110", "wav": "bangmaster_african_6.ogg"},
        {"name": "African Samba", "speed": "110", "wav": "bangmaster_african_7.ogg"},  
        {"name": "African Korede", "speed": "106", "wav": "bangmaster_african_8.ogg"},        
        {"name": "Backtrack Rock", "speed": "140", "wav": "bangmaster_backtrack_1.ogg"},   
        {"name": "Backtrack Worship", "speed": "80", "wav": "bangmaster_backtrack_2.ogg"},
        {"name": "Backtrack Church", "speed": "95", "wav": "bangmaster_backtrack_5.ogg"},
        {"name": "Backtrack Country", "speed": "85", "wav": "bangmaster_backtrack_6.ogg"}, 
        {"name": "Backtrack Native", "speed": "115", "wav": "bangmaster_backtrack_3.ogg"},
        {"name": "Backtrack Traditional", "speed": "124", "wav": "bangmaster_backtrack_7.ogg"},
        {"name": "Backtrack Trap", "speed": "115", "wav": "bangmaster_backtrack_4.ogg"},
        {"name": "Backtrack Dancehall", "speed": "115", "wav": "bangmaster_dancehall_7.ogg"},
        {"name": "Dancehall Party", "speed": "98", "wav": "bangmaster_dancehall_1.ogg"},
        {"name": "Dancehall Raggaman", "speed": "93", "wav": "bangmaster_dancehall_2.ogg"},
        {"name": "Dancehall Youth", "speed": "100", "wav": "bangmaster_dancehall_3.ogg"},
        {"name": "Dancehall Dj", "speed": "102", "wav": "bangmaster_dancehall_4.ogg"},
        {"name": "Dancehall Laser", "speed": "105", "wav": "bangmaster_dancehall_6.ogg"},
        {"name": "Dancehall Slow", "speed": "90", "wav": "bangmaster_dancehall_5.ogg"},
        {"name": "Dancehall Kickless", "speed": "93", "wav": "bangmaster_dancehall_7.ogg"},
        {"name": "Dancehall Bang", "speed": "98", "wav": "bangmaster_dancehall_8.ogg"},
        {"name": "Dancehall Tribeta", "speed": "112", "wav": "bangmaster_dancehall_9.ogg"},
        {"name": "Dancehall Daddy Showkey", "speed": "103", "wav": "bangmaster_dancehall_10.ogg"},   
        {"name": "Hiphop Urban", "speed": "98", "wav": "bangmaster_hiphop_1.ogg"},
        {"name": "Hiphop Neptunes", "speed": "92", "wav": "bangmaster_hiphop_8.ogg"},
        {"name": "Hiphop Black Panther", "speed": "120", "wav": "bangmaster_hiphop_13.ogg"},    
        {"name": "Hiphop Rap Battle", "speed": "93", "wav": "bangmaster_hiphop_5.ogg"},
        {"name": "Hiphop Bump It", "speed": "151", "wav": "bangmaster_hiphop_7.ogg"},
        {"name": "Hiphop 50 Cents", "speed": "90", "wav": "bangmaster_hiphop_9.ogg"},
        {"name": "Hiphop Fat Joe", "speed": "95", "wav": "bangmaster_hiphop_10.ogg"},
        {"name": "Hiphop Timbaland", "speed": "122", "wav": "bangmaster_hiphop_3.ogg"},
        {"name": "Hiphop Jungle", "speed": "97", "wav": "bangmaster_hiphop_11.ogg"},
        {"name": "Hiphop Trap", "speed": "85", "wav": "bangmaster_hiphop_2.ogg"},
        {"name": "Hiphop Busta Rhymes", "speed": "99", "wav": "bangmaster_hiphop_12.ogg"},
        {"name": "Reggae Marley", "speed": "70", "wav": "bangmaster_reggae_8.ogg"},
        {"name": "Reggae Classic", "speed": "125", "wav": "bangmaster_reggae_1.ogg"},
        {"name": "Reggae Fast", "speed": "145", "wav": "bangmaster_reggae_3.ogg"},
        {"name": "Reggae Bounce", "speed": "138", "wav": "bangmaster_reggae_4.ogg"},
        {"name": "Reggae Disco", "speed": "144", "wav": "bangmaster_reggae_5.ogg"},
        {"name": "Reggae Kingston", "speed": "138", "wav": "bangmaster_reggae_6.ogg"},
        {"name": "Reggae Clean", "speed": "80", "wav": "bangmaster_reggae_7.ogg"},
        {"name": "Reggae Old Man", "speed": "125", "wav": "bangmaster_reggae_2.ogg"},
        {"name": "Reggae Groove", "speed": "128", "wav": "bangmaster_reggae_9.ogg"},
        {"name": "Reggae Trap", "speed": "140", "wav": "bangmaster_reggae_10.ogg"},        
        {"name": "Rock Bounce", "speed": "104", "wav": "bangmaster_rock_1.ogg"},
        {"name": "Rock 3/4 Timing", "speed": "125", "wav": "bangmaster_rock_2.ogg"},
        {"name": "Rock Classic", "speed": "128", "wav": "bangmaster_rock_3.ogg"},
        {"name": "Rock BladeHunter", "speed": "85", "wav": "bangmaster_rock_5.ogg"},
        {"name": "Rock Funk", "speed": "101", "wav": "bangmaster_rock_4.ogg"},
        {"name": "Rock Nikita", "speed": "140", "wav": "bangmaster_rock_6.ogg"},
        {"name": "Rock Steel", "speed": "120", "wav": "bangmaster_rock_7.ogg"},
        {"name": "Rock Adrian", "speed": "111", "wav": "bangmaster_rock_8.ogg"},
        {"name": "Rock Country", "speed": "128", "wav": "bangmaster_rock_9.ogg"},
        {"name": "Rock Stoned", "speed": "80", "wav": "bangmaster_rock_10.ogg"},
        {"name": "Trap @Ovijazz", "speed": "130", "wav": "bangmaster_trap_1.ogg"},
        {"name": "Trap - Mr. Oscar", "speed": "130", "wav": "bangmaster_trap_2.ogg"},
        {"name": "Trap Feige", "speed": "115", "wav": "bangmaster_trap_3.ogg"},
        {"name": "Trap Dj Khalid", "speed": "70", "wav": "bangmaster_trap_4.ogg"},
        {"name": "Trap Masterpiece", "speed": "100", "wav": "bangmaster_trap_5.ogg"},
        {"name": "Trap Kickless", "speed": "115", "wav": "bangmaster_trap_6.ogg"},
        {"name": "Trap Ain't Playin", "speed": "93", "wav": "bangmaster_trap_7.ogg"},
        {"name": "Trap Overdose", "speed": "98", "wav": "bangmaster_trap_8.ogg"},
        {"name": "Trap Jumanji", "speed": "112", "wav": "bangmaster_trap_9.ogg"},
        {"name": "Trap Timbaland", "speed": "103", "wav": "bangmaster_trap_10.ogg"},
    ];
})

bangmaster.controller('Controller1', function($scope, $rootScope, $interval) {
    $scope.transition = 'pt-page-fade';
    $scope.timer = 0;
    $scope.beats = $rootScope.beats;
    //Initialize Beat Settings
    $scope.rate = 1;
    if($rootScope.position) {
        $scope.position = $rootScope.position;
        $rootScope.position = $scope.position;
    } else {
        $scope.position = 0;
        $rootScope.position= $scope.position;
    }
    if($rootScope.beatname) {
        $scope.name = $rootScope.beatname;
        $rootScope.beatname = $scope.name;
    } else {
        $scope.name = 'African Calypso';
        $rootScope.beatname = $scope.name;
    }
    if($rootScope.beatspeed) {
        $scope.speed = $rootScope.beatspeed;
        $scope.originalspeed = $rootScope.beatspeed;
        $rootScope.beatspeed = $scope.speed;
    } else {
        $scope.speed = 121;
        $scope.originalspeed = 121;
        $rootScope.beatspeed = $scope.speed;
    }
    //var rootDirectory = 'cdvfile://localhost/persistent/mp3/';
    //var rootDirectory = 'file:///android_asset/www/mp3/';
    //var rootDirectory = '/android_asset/www/mp3/';
    alert(cordova.file.applicationDirectory);
    //var rootDirectory = cordova.file.applicationDirectory + "www/mp3/";
    //var rootDirectory = 'mp3/';
    //song_url = '/android_asset/www/' + song_url;
    if($rootScope.beatwav) {
        if($rootScope.beatwav.indexOf(rootDirectory) != -1) {
            $scope.wav = $rootScope.beatwav;
        } else {
            $scope.wav = rootDirectory + $rootScope.beatwav;
        }
        $rootScope.beatwav = $scope.wav;
    } else {
        $scope.wav = rootDirectory + 'bangmaster_african_1.ogg';
        $rootScope.beatwav = $scope.wav;
    }
    //Prev Track
    var $prevno = parseInt($rootScope.position) - 1;
    if($prevno < 0 ) {$prevno = $scope.beats.length - 1;}
    $scope.prevtrack = $scope.beats[$prevno];
    $scope.prevpos = $prevno;
    //Next Track
    var $nextno = parseInt($rootScope.position) + 1;
    if($nextno > ($scope.beats.length - 1)) {$nextno = 0;}
    $scope.nexttrack = $scope.beats[$nextno];
    $scope.nextpos = $nextno;
    //Check Play Operation
    if($rootScope.sound && $rootScope.sound.playing()) {
        //Load WAV
        $scope.sound = new Howl({
            src: [$scope.wav],
            loop: true
        });
        if($rootScope.sound.duration() != $scope.sound.duration()) {
            //Destroy all previous sound cache objects
            Howler.unload(); 
            //Load WAV again...
            $scope.sound = new Howl({
                src: [$scope.wav],
                loop: true
            });   
            //Initialize control settings
            $scope.control = 'ti-control-stop';
            $scope.btnposition = 'position: relative; left: 0;';
            //Engage Play straight from list...       
            $scope.currentbeat = $scope.sound.play();
            $scope.sound.rate($scope.rate, $scope.currentbeat);
            $rootScope.currentbeat = $scope.currentbeat;
            $scope.status = '(playing...)';
            $rootScope.speed = $scope.speed;
            $rootScope.beatspeed = $scope.speed;
            //Wave Marker   
            var wavemark = document.getElementById('wavemark');
            var wavemark_bg = document.getElementById('wavemark-bg');
            var duration = $scope.sound.duration();
            //alert(duration);
            var markpostn = 0; var str_markpostn = '';           
            $scope.marker = $interval(function() {
                $scope.timer = $scope.sound.seek().toFixed(2);
                markpostn = ($scope.timer/duration) * 100;
                str_markpostn = markpostn + '%';
                wavemark.style.setProperty('left', str_markpostn);
                wavemark_bg.style.setProperty('width', str_markpostn);
            }, 10);
        } else {
            //Initialize control settings
            $scope.control = 'ti-control-stop';
            $scope.btnposition = 'position: relative; left: 0;';
            $scope.sound = $rootScope.sound;
            $scope.speed = $rootScope.speed;
            $rootScope.beatspeed = $scope.speed;
            //Adjust Marker...
            var wavemark = document.getElementById('wavemark');
            var wavemark_bg = document.getElementById('wavemark-bg');
            var duration = $scope.sound.duration();
            var markpostn = 0; var str_markpostn = '';
            duration = ($scope.originalspeed * duration)/$scope.speed;
            $scope.marker = $interval(function() {
                markpostn = ($scope.sound.seek()/duration) * 100;
                str_markpostn = markpostn + '%';
                wavemark.style.setProperty('left', str_markpostn);
                wavemark_bg.style.setProperty('width', str_markpostn);
            }, 10);
        }
        $rootScope.sound = $scope.sound;
    } else {
        //Load WAV
        $scope.sound = new Howl({
            src: [$scope.wav],
            loop: true
        });
        $rootScope.sound = $scope.sound;
        //Initialize Beat Controls
        $scope.control = 'ti-control-play';
        $scope.btnposition = 'position: relative; left: 5px;';
        $scope.currentbeat = '';
    }
    //Generate WAVSurfer
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#222435',
        progressColor: 'red',
        hideScrollbar: true,
        height: 45
    });
    wavesurfer.load($scope.wav);
    //Play File
    $scope.fn_play = function() {
        //Determine Play/Stop
        if($scope.control == 'ti-control-play') {
            //Change Label
            $scope.control = 'ti-control-stop';
            $scope.btnposition = 'position: relative; left: 0;';
            //Play Loop        
            $scope.currentbeat = $scope.sound.play();
            $scope.sound.rate($scope.rate, $scope.currentbeat);
            $rootScope.currentbeat = $scope.currentbeat;
            $scope.status = '(playing...)';
            $rootScope.speed = $scope.speed;
            $rootScope.beatspeed = $scope.speed;
            //Wave Marker    
            var wavemark = document.getElementById('wavemark');
            var wavemark_bg = document.getElementById('wavemark-bg');
            var duration = $scope.sound.duration();
            var markpostn = 0; var str_markpostn = '';           
            $scope.marker = $interval(function() {
                $scope.timer = $scope.sound.seek().toFixed(2);
                markpostn = ($scope.timer/duration) * 100;
                str_markpostn = markpostn + '%';
                wavemark.style.setProperty('left', str_markpostn);
                wavemark_bg.style.setProperty('width', str_markpostn);
            }, 10);
        } else {
            //Change Label
            $scope.control = 'ti-control-play';
            $scope.btnposition = 'position: relative; left: 5px;';
            //Stop Loop
            $scope.sound.stop();
            $scope.status = '';
            //Wave Marker
            $interval.cancel($scope.marker);
        }
    }
    $scope.fn_increase = function() {
        if($scope.speed < 522) {
            $scope.speed++;
            var myrate = parseFloat(($scope.speed/$scope.originalspeed).toFixed(4));
            $scope.rate = myrate;
            $scope.sound.rate(myrate, $rootScope.currentbeat);
            $rootScope.speed = $scope.speed;
            //Adjust Marker...
            $interval.cancel($scope.marker);
            var wavemark = document.getElementById('wavemark');
            var wavemark_bg = document.getElementById('wavemark-bg');
            var duration = $scope.sound.duration();
            var markpostn = 0; var str_markpostn = '';
            duration = ($scope.originalspeed * duration)/$scope.speed;
            $scope.marker = $interval(function() {
                $scope.timer = $scope.sound.seek().toFixed(2);
                markpostn = ($scope.sound.seek()/duration) * 100;
                str_markpostn = markpostn + '%';
                wavemark.style.setProperty('left', str_markpostn);
                wavemark_bg.style.setProperty('width', str_markpostn);
            }, 10);
        }
    }
    $scope.fn_decrease = function() {
        if($scope.speed > 10) {
            $scope.speed--;
            var myrate = parseFloat(($scope.speed/$scope.originalspeed).toFixed(4));
            $scope.rate = myrate;
            $scope.sound.rate(myrate, $rootScope.currentbeat);
            $rootScope.speed = $scope.speed;
            //Adjust Marker...
            $interval.cancel($scope.marker);
            var wavemark = document.getElementById('wavemark');
            var wavemark_bg = document.getElementById('wavemark-bg');
            var duration = $scope.sound.duration();
            var markpostn = 0; var str_markpostn = '';
            duration = ($scope.originalspeed * duration)/$scope.speed;
            $scope.marker = $interval(function() {
                $scope.timer = $scope.sound.seek().toFixed(2);
                markpostn = ($scope.sound.seek()/duration) * 100;
                str_markpostn = markpostn + '%';
                wavemark.style.setProperty('left', str_markpostn);
                wavemark_bg.style.setProperty('width', str_markpostn);
            }, 10);
        }
    }
    $scope.fn_prev = function(event) {
        var beatposition = event.currentTarget.getAttribute("data-position");
        var beatname = event.currentTarget.getAttribute("data-name");
        var beatspeed = event.currentTarget.getAttribute("data-speed");
        var beatwav = event.currentTarget.getAttribute("data-wav");
        $rootScope.beatname = beatname;
        $rootScope.beatspeed = beatspeed;
        $rootScope.beatwav = beatwav;
        $rootScope.position = beatposition;
    }
    $scope.fn_next = function(event) {
        var beatposition = event.currentTarget.getAttribute("data-position");
        var beatname = event.currentTarget.getAttribute("data-name");
        var beatspeed = event.currentTarget.getAttribute("data-speed");
        var beatwav = event.currentTarget.getAttribute("data-wav");
        $rootScope.beatname = beatname;
        $rootScope.beatspeed = beatspeed;
        $rootScope.beatwav = beatwav;
        $rootScope.position = beatposition;
    }
});

bangmaster.controller('Controller2', function($scope, $rootScope) {
    $scope.pagetitle = 'Presets (Samples)';
    $scope.transition = 'pt-page-fade';
    $scope.fn_anchor = function(event) {
        var beatposition = event.currentTarget.getAttribute("data-position");
        var beatname = event.currentTarget.getAttribute("data-name");
        var beatspeed = event.currentTarget.getAttribute("data-speed");
        var beatwav = event.currentTarget.getAttribute("data-wav");
        $rootScope.beatname = beatname;
        $rootScope.beatspeed = beatspeed;
        $rootScope.beatwav = beatwav;
        $rootScope.position = beatposition;
    }
    $scope.beats = $rootScope.beats;
});

bangmaster.controller('Controller3', function($scope, $rootScope) {
    $scope.pagetitle = 'Settings';
    $scope.transition = 'pt-page-fade'; 
});

bangmaster.controller('Controller4', function($scope, $rootScope) {
    $scope.pagetitle = 'Samplerizer';
    $scope.transition = 'pt-page-fade';
    $scope.animate = false;
    $scope.fn_sample = function() {
        $scope.animate = !$scope.animate;
    }
    $scope.fn_exit = function() {
        $scope.animate = false;
    }
});

bangmaster.controller('Controller5', function($scope, $rootScope) {
    $scope.pagetitle = 'Search';
    $scope.transition = 'pt-page-fade';
    $scope.fn_anchor = function(event) {
        var beatposition = event.currentTarget.getAttribute("data-position");
        var beatname = event.currentTarget.getAttribute("data-name");
        var beatspeed = event.currentTarget.getAttribute("data-speed");
        var beatwav = event.currentTarget.getAttribute("data-wav");
        $rootScope.beatname = beatname;
        $rootScope.beatspeed = beatspeed;
        $rootScope.beatwav = beatwav;
        $rootScope.position = beatposition;
    }
    $scope.beats = $rootScope.beats;
    var searchText = document.getElementById('searchText');
    searchText.focus();
});

bangmaster.controller('Controller6', function($scope, $rootScope) {
    $scope.pagetitle = 'Language';
    $scope.transition = 'pt-page-fade';   
});

bangmaster.controller('Controller7', function($scope, $rootScope) {
    $scope.pagetitle = 'Theme Skin';
    $scope.transition = 'pt-page-fade';
});

bangmaster.controller('Controller8', function($scope, $rootScope) {
    $scope.pagetitle = 'Record Blade';
    $scope.transition = 'pt-page-fade';
    $scope.animate = false;
    $scope.fn_record = function() {
        $scope.animate = true;
    }
    $scope.fn_exit = function() {
        $scope.animate = false;
    }
});

bangmaster.controller('Controller9', function($scope, $rootScope) {
    $scope.pagetitle = 'Theme Skin';
    $scope.transition = 'Wave Kitchen';
});