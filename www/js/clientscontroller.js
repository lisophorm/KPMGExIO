myApp.controller("ClientsController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal,$ionicScrollDelegate) {


    $scope.$on('$ionicView.beforeEnter', function(){
        console.log("beforeEnter clientscontroller");







    });



    $scope.parallax=function(eventData) {

        var yTilt = Math.round((-eventData.beta + 90) * (40 / 180) - 40);
        var xTilt = Math.round(-eventData.gamma * (40 / 180) - 20);
        if (xTilt > 0) {
            xTilt = -xTilt;
        } else if (xTilt < -40) {
            xTilt = -(xTilt + 80);
        }

        var backgroundPositionVal = xTilt + 'px ' + yTilt + 'px';
        console.log("defaultorientaitonevent CLIENTS "+xTilt+" "+yTilt);
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


    $scope.$on('$ionicView.afterLeave', function () {
        TweenLite.to(document.getElementById('clientsconeleft'), 0, {opacity:0});
        TweenLite.to(document.getElementById('clientsconeright'), 0, {opacity:0});
        console.log("Clients afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);
    });


    $scope.callSlide = function(theIndex){
        console.log("CLIENTS pressed slide"+theIndex);
        $ionicSlideBoxDelegate.$getByHandle('ClientSwipeDelegate').slide(theIndex);
    };


    $scope.slideChanged = function(index) {
        console.log("clients slide changed!"+index);
        $ionicScrollDelegate.scrollTop(true);
        var slide = document.getElementsByClassName("slider");

        var alt = 800;
        switch (index) {

            case 1:
                alt = 941+80;
                break;
            case 2:
                alt = 481+100;
                break;
            case 3:
                alt = 700;
                break;
            case 4:
                alt = 1013;
                break;
            case 5:
                alt = 1695;
                break;
            case 6:
                alt = 1186+100;
                break;
            default:
                alt=800;
                break;

        }



        $(".slider").height(alt);
        $(".scroll").height(alt);
        $(".slider-slides").height(alt);
        console.log("CLIENTS slide changed!" + index + " height:" + $(".slider").height());
        /*$timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.$on('$ionicView.afterEnter', function () {

        move("#clientsmenu")
            .set('opacity','1')
            .delay('0.3s')
            .duration('0.3s')
            .end();

        move('#clientsconeleft').delay("0.6s").ease('out').x(0).duration('0.3s').end();
        move('#clientsconeright').delay("0.6s").ease('out').x(0).duration('0.3s').end();
        window.addEventListener('deviceorientation', $scope.parallax , false);
    });

    $scope.evolSrc="img/popups/B1.png"

    $scope.$on('$ionicView.beforeEnter', function(){
        TweenLite.to(document.getElementById('clientsconeleft'), 0, {opacity:1});
        TweenLite.to(document.getElementById('clientsconeright'), 0, {opacity:1});
        console.log("afterenter splashcontroller");

        move("#clientsmenu")
            .set('opacity','0')
            .duration('0s')
            .end();

        move('#clientsconeleft').x(-272).duration('0').end();
        move('#clientsconeright').x(93).duration('0').end();

        if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide( $stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }

    });


});

