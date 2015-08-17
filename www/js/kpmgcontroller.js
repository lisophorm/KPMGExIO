myApp.controller("KPMGController", function ($scope, $location, $stateParams, $ionicSlideBoxDelegate, $ionicModal,$ionicScrollDelegate,$timeout) {


    $scope.data = {};
    //$scope.data.currSlide = $ionicSlideBoxDelegate.currentIndex();
    //console.log('Current Slide = ' + $scope.data.currSlide);


//    $scope.$on('$ionicView.beforeEnter', function () {
     //   console.log("beforeEnter KPMGcontroller");

            //$(".slider-pager-page").css("opacity",0.3);

      /*  move("#KPMGheader")
            .set('height', '89px')
            .duration('0.5s')
            .end();  */

 //   });

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

        TweenLite.to(document.getElementById('kpmgconeleft'), 0, {opacity:0});
        TweenLite.to(document.getElementById('kpmgconeright'), 0, {opacity:0});

        console.log("KPMG afterLeave");
        //window.removeEventListener('deviceorientation', $scope.parallax, true);
    });

    $scope.$on('$ionicView.beforeEnter', function () {

        TweenLite.to(document.getElementById('kpmgconeleft'), 0, {opacity:1});
        TweenLite.to(document.getElementById('kpmgconeright'), 0, {opacity:1});

        angular.element(document.getElementsByClassName("slider")).css("height","688px");
        angular.element(document.getElementsByClassName("scroll")).css("height","688px");
        angular.element(document.getElementsByClassName("slider-slides")).css("height","688px");

    console.log("beforeEnter");

        angular.element(document.getElementById("kpmgmenu")).css("opacity","0");
        angular.element(document.getElementById("clientsmenu")).css("opacity","0");


        TweenLite.to(document.getElementById('kpmgconeleft'), 0, {css:{transform:"translateX(-272px)"}});
        TweenLite.to(document.getElementById('kpmgconeright'), 0, {css:{transform:"translateX(93px)"}});

        TweenLite.to(document.getElementsByClassName('KPMGheader'), 0.3, {css:{height:'89px'}}).delay(0.4);



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
                alt = 406+100;
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
                alt = 1050;
                break;
            case 6:
                alt = 1751;
                break;
            case 7:
                alt = 850+83;
                break;
            case 8:
                alt = 691+100;
                break;
            case 9:
                alt=636+100;
            case 10:
                alt=531+100;
            default:
                alt=900;
                break;

        }

        angular.element(document.getElementsByClassName("slider")).css("height",alt+"px");
        angular.element(document.getElementsByClassName("scroll")).css("height",alt+"px");
        angular.element(document.getElementsByClassName("slider-slides")).css("height",alt+"px");
       /* $timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.$on('$ionicView.afterEnter', function () {


        TweenLite.to(document.getElementById('kpmgmenu'), 0.3, {css:{opacity:1}}).delay(0.3);

        TweenLite.to(document.getElementById('kpmgconeleft'), 0.3, {css:{transform:"translateX(0px)"}}).delay(0.6);
        TweenLite.to(document.getElementById('kpmgconeright'), 0.3, {css:{transform:"translateX(0px)"}}).delay(0.6);




    });




});

