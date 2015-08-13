myApp.controller('VideoCtrl',
    function ($scope, $ionicModal,$cordovaMedia) {
        console.log("popup controller");
        $ionicModal.fromTemplateUrl('video-popover.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hide', function () {
            console.log("hide modal");
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            console.log("removed modal");
        });
        $scope.$on('modal.shown', function () {
            console.log('Modal is shown!');
        });

        $scope.playVideo = function (theClip) {

            //var ref = window.open('http://www.google.com', '_blank', 'toolbar=yes,enableViewportScale=yes,location=yes,width=300');


            console.log("play vidweo:"+theClip);
            $scope.clipSrc = theClip;
            $scope.openModal();

        };

        $scope.play = function(src) {
            var media = new Media(src, null, null, mediaStatusCallback);
            $cordovaMedia.play(media);
        };

        var mediaStatusCallback = function(status) {
            if(status == 1) {
                $ionicLoading.show({template: 'Loading...'});
            } else {
                $ionicLoading.hide();
            }
        }
    });

myApp.controller('SlideSwipeCtrl',  function ($scope, $ionicModal, $ionicPlatform,$timeout) {


    $scope.currentSlideGroup=99;

    $scope.currentSwipe=0;

    $scope.isInitialized=false;

    $scope.cImages=Array();
    $scope.cImages[0] = [{
        'src' : 'img/popups/age_manufatrueing.png',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_distribution.png',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_informtion.png',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_customer.png',
        'width' : 616,
        'height' : 539
    }];

    $scope.cImages[1] = [{
        'src' : 'img/popups/02_popup_01.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_02.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_03.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_04.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_05.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_06.png',
        'width' : 1024,
        'height' : 411
    }];

    $scope.cImages[2] = [{
        'src' : 'img/popups/circle1.png',
        'width' : 1024,
        'height' : 602
    }, {
        'src' : 'img/popups/circle2.png',
        'width' : 1024,
        'height' : 602
    },{
        'src' : 'img/popups/circle3.png',
        'width' : 1024,
        'height' : 602
    },{
        'src' : 'img/popups/circle4.png',
        'width' : 1024,
        'height' : 602
    },{
        'src' : 'img/popups/circle5.png',
        'width' : 1024,
        'height' : 602
    }];


    $scope.aImages = [{
        'src' : 'img/popups/02_popup_01.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_02.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_03.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_04.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_05.png',
        'width' : 1024,
        'height' : 411
    }, {
        'src' : 'img/popups/02_popup_06.png',
        'width' : 1024,
        'height' : 411
    }];

    $scope.initModal = function() {
        console.log("******************** initialization modal");

    }




    $scope.openModal = function() {
       $scope.modal.show();
    };

    $scope.closeModal = function() {
        //$scope.modal.hide();
        $scope.modal.remove();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.isInitialized=false;
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
        console.log('Modal is hidden2!');
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        console.log('Modal is removed2!');
    });
    $scope.$on('modal.shown', function() {
        console.log('Modal is shown2!');
    });


    $scope.swipeLeft=function() {
        console.log("swipeleft");
        if($scope.currentSwipe<$scope.aImages.length-1) {
            var destLeft= (1024+$scope.aImages[$scope.currentSwipe].width*2)*-1;
            var destRight=(1024+$scope.aImages[$scope.currentSwipe].width*2);

            TweenLite.to(document.getElementById('nextslide'), 0, {css:{transform:"translateX("+destRight+"px)"}});
            TweenLite.to(document.getElementById('currentslide'), 0, {css:{opacity:1,transform:"translateX(0px)"}});

            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe++;
            $timeout(function () {
            $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            }).then(function() {
                console.log($scope.aImages[$scope.currentSwipe].src);


                TweenLite.to(document.getElementById('nextslide'), 0.5, {
                    css: {transform: "translateX(0px)"},
                    ease: Sine.easeInOut
                });

                TweenLite.to(document.getElementById('currentslide'), 0.5, {
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
        //theScope.$apply();



        })
    }

    $scope.swipeRight=function() {
        console.log("swiperight");
        if($scope.currentSwipe>0) {
            var destLeft= (1024+$scope.aImages[$scope.currentSwipe].width*2)*-1;
            var destRight=(1024+$scope.aImages[$scope.currentSwipe].width*2);

            TweenLite.to(document.getElementById('nextslide'), 0, {css:{transform:"translateX("+destLeft+"px)"}});
            TweenLite.to(document.getElementById('currentslide'), 0, {css:{opacity:1,transform:"translateX(0px)"}});

            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe--;
            $timeout(function () {
                $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            }).then(function() {
                console.log($scope.aImages[$scope.currentSwipe].src);


                TweenLite.to(document.getElementById('nextslide'), 0.5, {
                    css: {transform: "translateX(0px)"},
                    ease: Sine.easeInOut
                });

                TweenLite.to(document.getElementById('currentslide'), 0.5, {
                    css: {transform: "translateX(" + destRight + "px)"},
                    ease: Sine.easeInOut,
                    onComplete: $scope.resetSlide,
                    onCompleteParams: [$scope]
                });
            });

        }



    }


    $scope.goToSlide = function(index,groupIndex) {
       if($scope.currentSlideGroup!=groupIndex) {
           angular.copy($scope.cImages[groupIndex], $scope.aImages);
        }

        $scope.currentSwipe = index;

        $ionicModal.fromTemplateUrl('image-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.isInitialized=true;

            $timeout(function () {
                console.log("timeout modal");
                $scope.slidewidth = $scope.aImages[index].width;
                $scope.slideheight = $scope.aImages[index].height;

                $scope.$apply();

                $scope.imageSrc = $scope.aImages[index].src;
                $scope.nextImageSrc = $scope.aImages[index].src;

                $scope.$apply();

            }).then(function() {
                console.log("timeout then");
                $scope.modal.show();
            });
        });




    };

    // Called each time the slide changes

});

myApp.controller('EvoSwipeCtrl',  function ($scope, $ionicModal, $ionicPlatform,$timeout,$ionicScrollDelegate) {


    TweenLite.to(document.getElementsByClassName('evolOverlay'), 0, {css:{autoAlpha:0}});


    $scope.currentSlideGroup=99;

    $scope.currentSwipe=0;

    $scope.isInitialized=false;

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

    $scope.initModal = function() {
        console.log("******************** initialization modal");

    }




    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.evoCloseModal = function() {
        console.log("CLOSE EVOL MODAL");
        TweenLite.to(document.getElementsByClassName('evolOverlay'), 0.5, {css:{autoAlpha:0}});
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.isInitialized=false;
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
        console.log('Modal is hidden2!');
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        console.log('Modal is removed2!');
    });
    $scope.$on('modal.shown', function() {
        console.log('Modal is shown2!');
    });


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
            //theScope.$apply();



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

    $scope.slidewidth = $scope.aImages[0].width;
    $scope.slideheight = $scope.aImages[0].height;


    $scope.imageSrc = $scope.aImages[0].src;
    $scope.nextImageSrc = $scope.aImages[0].src;


    $scope.evolutionOpenPopUp=function(theSlide) {

        var corrente=0;
        console.log("EVOL POPUP"+$ionicScrollDelegate.getScrollPosition().top);

        var top=392-$ionicScrollDelegate.getScrollPosition().top;


        console.log("Top : ");
        //console.log("Top : " + $ionicScrollDelegate.getScrollPosition().top);
        console.log($scope.aImages.length);

        for (i=0;i<$scope.aImages.length;i++) {
            if($scope.aImages[i].src.indexOf(theSlide)!=-1) {
                console.log("ccc "+$scope.aImages[i].src);
                $scope.currentSwipe =i;
                break;
            }

        }





            $timeout(function () {
                console.log("timeout modal");
                $scope.slidewidth = $scope.aImages[$scope.currentSwipe].width;
                $scope.slideheight = $scope.aImages[$scope.currentSwipe].height;

                $scope.$apply();

                $scope.imageSrc = $scope.aImages[$scope.currentSwipe].src;
                $scope.nextImageSrc = $scope.aImages[$scope.currentSwipe].src;

                $scope.$apply();

            }).then(function() {
                TweenLite.to(document.getElementsByClassName('evolOverlay'), 0, {onComplete:function() {
                    TweenLite.to(document.getElementsByClassName('evolOverlay'), 0.3, {css:{autoAlpha:1}});
                },css:{paddingTop:top+"px"}});

            });


    };

    // Called each time the slide changes

});

