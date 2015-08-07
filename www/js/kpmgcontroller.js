myApp.controller("KPMGController", function ($scope, $location, $stateParams, $ionicSlideBoxDelegate, $ionicModal,$ionicScrollDelegate,$timeout, $cordovaFileOpener2) {


    $scope.data = {};
    $scope.data.currSlide = $ionicSlideBoxDelegate.currentIndex();
    console.log('Current Slide = ' + $scope.data.currSlide);

    $scope.$on('slideBox.slideChanged', function (event, index) {
        console.debug('Slide box has been changed, current index is ' + index);
    });

    $scope.$on('$ionicView.beforeEnter', function () {
        console.log("beforeEnter KPMGcontroller");

            //$(".slider-pager-page").css("opacity",0.3);

      /*  move("#KPMGheader")
            .set('height', '89px')
            .duration('0.5s')
            .end();  */

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
        console.log("defaultorientaitonevent KPMG "+xTilt+" "+yTilt);
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

       // $(".leftCorner").css('backgroundPosition',backgroundPositionVal);
    }

    $scope.$on('$ionicView.afterLeave', function () {

        console.log("KPMG afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);
    });

    $scope.$on('$ionicView.beforeEnter', function () {

    console.log("beforeEnter");

        move('#kpmgconeleft').ease('out').x(-272).duration('0').end();
        move('#kpmgconeright').ease('out').x(93).duration('0').end();

            var position = document.getElementById("position");


                console.log("defaultorientaitonevent");


    });
    $scope.callSlide = function (theIndex) {
        console.log("KPMG pressed slide" + theIndex);
        $ionicSlideBoxDelegate.$getByHandle('KPMGSwipeHandle').slide(theIndex);
    };


    $scope.slideChangedKPMG = function (index) {
        console.log("slidechanged main kpmg controller");
        $ionicScrollDelegate.scrollTop(true);
        var slide = document.getElementsByClassName("slider");

        var alt = 800;
        switch (index) {

            case 1:
                alt = 406+82;
                break;
            case 2:
                alt = 1184;
                break;
            case 3:
                alt = 1200;
                break;

            case 4:
                alt = 1445;
                break;
            case 5:
                alt = 990;
                break;
            case 6:
                alt = 1751;
                break;
            case 7:
                alt = 850+83;
                break;
            case 8:
                alt = 850;
                break;
            default:
                alt=800;
                break;

        }

        $(".slider").height(alt);
        $(".scroll").height(alt);
        $(".slider-slides").height(alt);
        console.log("KPMG slide changed!" + index + " height:" + $(".slider").height());
       /* $timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.openPDF = function(theLink) {
        console.log("opening PDF:"+theLink);


        $cordovaFileOpener2.open(
            './pdf/'+theLink+'.pdf',
            'application/pdf'
        ).then(function() {
                alert('file opened successfully');
            }, function(errorObj) {
                alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message);
            });

    }

    $scope.$on('$ionicView.afterEnter', function () {
        move('#kpmgconeleft').ease('out').x(0).duration('0.3s').end();
        move('#kpmgconeright').ease('out').x(0).duration('0.3s').end();
        window.addEventListener('deviceorientation', $scope.parallax , false);
    });

    $scope.$on('$ionicView.beforeEnter', function () {
        console.log("beforeEnter splashcontroller KPMG");

        if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide($stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }
    });
});

