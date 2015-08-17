myApp.controller("ClientsController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal,$ionicScrollDelegate,$timeout) {


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
        //window.removeEventListener('deviceorientation', $scope.parallax, true);
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
                alt = 750;
                break;
            case 4:
                alt = 1013;
                break;
            case 5:
                alt = 1695;
                break;
            case 6:
                alt = 1230+100;
                break;
            default:
                alt=800;
                break;

        }

        angular.element(document.getElementsByClassName("slider")).css("height",alt+"px");
        angular.element(document.getElementsByClassName("scroll")).css("height",alt+"px");
        angular.element(document.getElementsByClassName("slider-slides")).css("height",alt+"px");


        /*$timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.$on('$ionicView.afterEnter', function () {



        TweenLite.to(document.getElementById('clientsmenu'), 0.3, {css:{opacity:1}}).delay(0.3);

        TweenLite.to(document.getElementById('clientsconeleft'), 0.3, {css:{transform:"translateX(0px)"}}).delay(0.6);
        TweenLite.to(document.getElementById('clientsconeright'), 0.3, {css:{transform:"translateX(0px)"}}).delay(0.6);



       // window.addEventListener('deviceorientation', $scope.parallax , false);
    });

    $scope.evolSrc="img/popups/B1.png"

    $scope.$on('$ionicView.beforeEnter', function(){
        TweenLite.to(document.getElementById('clientsconeleft'), 0, {opacity:1});
        TweenLite.to(document.getElementById('clientsconeright'), 0, {opacity:1});
        console.log("afterenter splashcontroller");

        TweenLite.to(document.getElementById('clientsmenu'), 0.3, {css:{opacity:1}}).delay(0.3);

        angular.element(document.getElementById("clientsmenu")).css("opacity","0");


        TweenLite.to(document.getElementById('clientsconeleft'), 0.3, {css:{transform:"translateX(-272px)"}});
        TweenLite.to(document.getElementById('clientsconeright'), 0.3, {css:{transform:"translateX(93px)"}});



        if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide( $stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }

    });

    // evolution modal


    TweenLite.to(document.getElementsByClassName('evolOverlay'), 0, {css:{autoAlpha:0}});






    $scope.aImages = [{
        'src' : 'img/popups/B1.png',
        'width' : 1024,
        'height' : 542
    }, {
        'src' : 'img/popups/B2.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/B3.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/B4.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/G1.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/G2.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/G3.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/G4.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/O1.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/O2.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/O3.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/O4.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/R1.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/R2.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/R3.png',
        'width' : 1024,
        'height' : 542
    },{
        'src' : 'img/popups/R4.png',
        'width' : 1024,
        'height' : 542
    }
    ];








    $scope.evoCloseModal = function() {
        console.log("CLOSE EVOL MODAL");
        TweenLite.to(document.getElementsByClassName('evolOverlay'), 0.5, {css:{autoAlpha:0}});
    };



    $scope.swipeLeft=function() {
        console.log("swipeleft");
        if($scope.currentSwipe<$scope.aImages.length-1) {
            var destLeft= (1024+$scope.aImages[$scope.currentSwipe].width*2)*-1;
            var destRight=(1024+$scope.aImages[$scope.currentSwipe].width*2);

            TweenLite.to(document.getElementById('evonextslide'), 0, {css:{transform:"translateX("+destRight+"px)"}});
            TweenLite.to(document.getElementById('evocurrentslide'), 0, {css:{opacity:1,transform:"translateX(0px)"}});

            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe++;
            $timeout(function () {
                $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            }).then(function() {
                console.log($scope.aImages[$scope.currentSwipe].src);


                TweenLite.to(document.getElementById('evonextslide'), 0.5, {
                    css: {transform: "translateX(0px)"},
                    ease: Sine.easeInOut
                });

                TweenLite.to(document.getElementById('evocurrentslide'), 0.5, {
                    css: {transform: "translateX(" + destLeft + "px)"},
                    ease: Sine.easeInOut,
                    onComplete: $scope.resetSlide,
                    onCompleteParams: [$scope]
                });
            });

        }
    }

    $scope.resetSlide=function(theScope) {
        console.log("resetSlide");
        console.log("resetslide:"+theScope.aImages[theScope.currentSwipe].src);
        $timeout(function () {
            theScope.imageSrc=theScope.aImages[theScope.currentSwipe].src;

        })
    }

    $scope.swipeRight=function() {
        console.log("swiperight");
        if($scope.currentSwipe>0) {
            var destLeft= (1024+$scope.aImages[$scope.currentSwipe].width*2)*-1;
            var destRight=(1024+$scope.aImages[$scope.currentSwipe].width*2);

            TweenLite.to(document.getElementById('evonextslide'), 0, {css:{transform:"translateX("+destLeft+"px)"}});
            TweenLite.to(document.getElementById('evocurrentslide'), 0, {css:{opacity:1,transform:"translateX(0px)"}});

            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe--;
            $timeout(function () {
                $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            }).then(function() {
                console.log($scope.aImages[$scope.currentSwipe].src);


                TweenLite.to(document.getElementById('evonextslide'), 0.5, {
                    css: {transform: "translateX(0px)"},
                    ease: Sine.easeInOut
                });

                TweenLite.to(document.getElementById('evocurrentslide'), 0.5, {
                    css: {transform: "translateX(" + destRight + "px)"},
                    ease: Sine.easeInOut,
                    onComplete: $scope.resetSlide,
                    onCompleteParams: [$scope]
                });
            });

        }



    }

    $scope.evolutionOpenPopUp=function(theSlide) {

        var corrente=0;
        console.log("EVOL POPUP"+$ionicScrollDelegate.getScrollPosition().top);

        var top=392-$ionicScrollDelegate.getScrollPosition().top;


        console.log("Top : ");
        console.log("Top : " + $ionicScrollDelegate.getScrollPosition().top);
        console.log($scope.aImages.length);

        for (i=0;i<$scope.aImages.length;i++) {
            if($scope.aImages[i].src.indexOf(theSlide)!=-1) {
                console.log("ccc "+$scope.aImages[i].src);
                $scope.currentSwipe =i;
                break;
            }

        }


        console.log("current swipe:"+$scope.currentSwipe);

        console.log($scope.aImages[$scope.currentSwipe].src);

        $timeout(function () {
            console.log("timeout modal");
            $scope.evolSlidewidth = $scope.aImages[$scope.currentSwipe].width;
            $scope.evolSlideheight = $scope.aImages[$scope.currentSwipe].height;

            //$scope.$apply();

            $scope.evoImageSrc = $scope.aImages[$scope.currentSwipe].src;
            $scope.evoNextImageSrc = $scope.aImages[$scope.currentSwipe].src;
            console.log($scope.evoNextImageSrc);
            //$scope.$apply();

        }).then(function() {
            TweenLite.to(document.getElementsByClassName('evolOverlay'), 0, {onComplete:function() {
                TweenLite.to(document.getElementsByClassName('evolOverlay'), 0.3, {css:{autoAlpha:1}});
            },css:{paddingTop:top+"px"}});

        });


    };


});

