myApp.controller("WorldController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal,$ionicScrollDelegate,$timeout) {


    $scope.playJulio = function(){
        console.log("pressed julio");

    };
    $scope.callSlide = function(theIndex){
        console.log("WORLD pressed slide"+theIndex);
        $ionicSlideBoxDelegate.$getByHandle('WorldSwipe').slide(theIndex);
    };


    $scope.parallax=function(eventData) {

        var yTilt = Math.round((-eventData.beta + 90) * (40 / 180) - 40);
        var xTilt = Math.round(-eventData.gamma * (40 / 180) - 20);
        if (xTilt > 0) {
            xTilt = -xTilt;
        } else if (xTilt < -40) {
            xTilt = -(xTilt + 80);
        }

        var backgroundPositionVal = xTilt + 'px ' + yTilt + 'px';
        console.log("defaultorientaitonevent WORLD "+xTilt+" "+yTilt);
        console.log("defaultorientaitonevent WORLD "+xTilt+" "+yTilt);
        $('.leftCorner').stop();

        $('.leftCorner').animate({
            'background-position-x': xTilt + 'px',
            'background-position-y': yTilt + 'px'
        }, 10);

        $('.rightcone').stop();

        $('.rightcone').animate({
            'background-position-x': xTilt + 'px',
            'background-position-y': yTilt + 'px'
        }, 10);
    }

    $scope.slideChanged = function(index) {

        console.log("world slide changed!"+index);
        $ionicScrollDelegate.scrollTop(true);
        var slide = document.getElementsByClassName("slider");

        var alt = 800;
        switch (index) {

            case 1:
                alt = 768;
                break;
            case 2:
                alt = 571+265;
                break;
            case 3:
                alt = 800;
                break;
            case 4:
                alt = 680;
                break;
            default:
                alt=800;
                break;

        }

        //angular.element(document.getElementsByClassName("slider")).height(alt);
        //angular.element(document.getElementsByClassName("scroll")).height(alt);
        //angular.element(document.getElementsByClassName("slider-slides")).height(alt);
        $(".slider").height(alt);
        $(".scroll").height(alt);
        $(".slider-slides").height(alt);
        //console.log("WORLD slide changed!" + index + " height:" + angular.element(document.getElementsByClassName("slider")).height());
        /*$timeout( function() {

         $ionicScrollDelegate.resize();
         }, 50);*/

    };

    $scope.$on('$ionicView.afterLeave', function () {
        console.log("World afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);

        TweenLite.to(document.getElementById('worldconeleft'), 0, {opacity:0});
        TweenLite.to(document.getElementById('worldconeright'), 0, {opacity:0});

    });

    $scope.$on('$ionicView.afterEnter', function () {
        TweenLite.to(document.getElementById('worldconeleft'), 0.3, {delay:0.3,css:{transform:"translateX(0px)"},ease:Sine.easeInOut});
        TweenLite.to(document.getElementById('worldconeright'), 0.3, {delay:0.3,css:{transform:"translateX(0px)"},ease:Sine.easeInOut});
        window.addEventListener('deviceorientation', $scope.parallax , false);

        TweenLite.to(document.getElementById('worldmenu'), 0.3, {opacity:1,ease:Sine.easeInOut}).delay(0.3);



    });

    $scope.$on('$ionicView.beforeEnter', function () {

        TweenLite.to(document.getElementById('worldmenu'), 0, {opacity:0});
        var video=document.getElementById('videoPOP');

        TweenLite.to(video, 0, {css:{transform:"translateX(1024px)"}});

        console.log("beforeEnter KPMGcontroller");

        TweenLite.to(document.getElementById('worldconeleft'), 0, {css:{transform:"translateX(-272px)"},ease:Sine.easeInOut,opacity:1});
        TweenLite.to(document.getElementById('worldconeright'), 0, {css:{transform:"translateX(93px)"},ease:Sine.easeInOut,opacity:1});



    });

    $scope.playVideo = function(theVid) {
        console.log("playvideo");
        var vid = document.getElementById("myVideoPlayer");
        $scope.videoSrc=theVid;

        var video=document.getElementById('videoPOP');

        //TweenLite.to(vid, 2, {backgroundColor:"#ff0000", left:"0px", ease:Power2.easeInOut});

        TweenLite.to(video, 0.5, {css:{transform:"translateX(0px)"}});


    }


    $scope.videoClose = function() {
        console.log("closing video");
        var vid = document.getElementById("myVideoPlayer");

        vid.pause();

        var video=document.getElementById('videoPOP');

        TweenLite.to(video, 0.5, {css:{transform:"translateX(1024px)"},ease:Sine.easeInOut});

    }



});