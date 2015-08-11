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

        $(".slider").height(alt);
        $(".scroll").height(alt);
        $(".slider-slides").height(alt);
        console.log("WORLD slide changed!" + index + " height:" + $(".slider").height());
        /*$timeout( function() {

         $ionicScrollDelegate.resize();
         }, 50);*/

    };

    $scope.$on('$ionicView.afterLeave', function () {
        console.log("World afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);



    });

    $scope.$on('$ionicView.afterEnter', function () {
        move('#worldconeleft').delay("0.6s").ease('out').x(0).duration('0.3s').end();
        move('#worldconeright').delay("0.6s").ease('out').x(0).duration('0.3s').end();
        window.addEventListener('deviceorientation', $scope.parallax , false);

        move("#worldmenu")
            .set('opacity','1')
            .delay('0.3s')
            .duration('0.3s')
            .end();

    });

    $scope.$on('$ionicView.beforeEnter', function () {

        move("#worldmenu")
            .set('opacity','0')
            .duration('0s')
            .end();

        move("#videoPOP")
            .ease('out')
            .x(1024)
            .duration('0')
            .end();

        console.log("beforeEnter KPMGcontroller");

        move('#worldconeleft').x(-272).duration('0').end();
        move('#worldconeright').x(93).duration('0').end();



        //$(".slider-pager-page.active").css("stroke","#9f0 !important;");
       /* if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide( $stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }*/

       /* move("#KPMGheader")
            .set('height', '89px')
            .duration('0.5s')
            .end(); */

    });

    $scope.playVideo = function(theVid) {
        console.log("playvideo");
        var vid = document.getElementById("myVideoPlayer");
        $scope.videoSrc=theVid;
        move("#videoPOP")
            .ease('out')
            .x(0)
            .duration('0.5s')
            .end();
    }


    $scope.videoClose = function() {
        console.log("closing video");
        var vid = document.getElementById("myVideoPlayer");

        vid.pause();

        move("#videoPOP")
            .ease('out')
            .x(1024)
            .duration('0.5s')
            .end();


    }



});