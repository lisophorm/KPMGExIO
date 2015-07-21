myApp.controller("ClientsController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal,$ionicScrollDelegate) {
    $scope.$on('slideBox.slideChanged', function (event, index) {
        console.debug('Slide box has been changed, current index is ' + index);
    });

    $scope.$on('$ionicView.beforeEnter', function(){
        console.log("beforeEnter clientscontroller");

        window.addEventListener('deviceorientation', $scope.parallax , false);

        $("#evolpopup").hide();

        move("#KPMGheader")
            .set('height','89px')
            .duration('0.5s')
            .end();

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
        console.log("Clients afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);
    });

    $scope.evolPopup=function(theSlide) {
        console.log("EVOLUTION SLIDE"+theSlide);
        $scope.evolSrc="img/popups/"+theSlide+".png";

        $("#evoHotSpots").hide();
        $("#evolpopup").show(500);
        move("#evolpopup")
            .set('opacity','1')
            .duration('0.1s').
            delay('0.1s')
            .end();

    }
    $scope.callSlide = function(theIndex){
        console.log("pressed slide"+theIndex);
        $ionicSlideBoxDelegate.slide(theIndex);
    };

    $scope.evolClose=function() {
        console.log("CLOSE EVOL");
        move("#evolpopup")
            .set('opacity','0')
            .duration('0.3s').
            delay('0.1s')
            .end(function() {
                $("#evoHotSpots").show();
            });
    }
    $scope.slideChanged = function(index) {
        console.log("clients slide changed!"+index);
        $ionicScrollDelegate.scrollTop(true);
        var slide = document.getElementsByClassName("slider");

        var alt = 800;
        switch (index) {

            case 1:
                alt = 1024;
                break;
            case 2:
                alt = 681;
                break;
            case 3:
                alt = 1005;
                break;
            case 4:
                alt = 776;
                break;
            case 5:
                alt = 1013;
                break;
            case 6:
                alt = 1763;
                break;
            case 7:
                alt = 1186+80;
                break;
            default:
                alt=800;
                break;

        }

        $(".slider").height(alt);
        $(".scroll").height(alt);
        $(".slider-slides").height(alt);
        console.log("KPMG slide changed!" + index + " height:" + $(".slider").height());
        /*$timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.evolSrc="img/popups/B1.png"

    $scope.$on('$ionicView.beforeEnter', function(){
        console.log("afterenter splashcontroller");

        if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide( $stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }

    });


});
