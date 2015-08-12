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

    $ionicModal.fromTemplateUrl('image-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;

        $scope.imageSrc=$scope.aImages[0].src;

    });




    $scope.openModal = function() {
       $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        //$scope.modal.remove();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
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
            var destLeft= ($(window).width()-$scope.aImages[$scope.currentSwipe].width)*-1;
            var destRight=($(window).width()+$scope.aImages[$scope.currentSwipe].width);

            move("#nextslide")
                .x(destRight)
                .duration('0s')
                .end();
            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe++;
            $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            //$scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src;
            console.log($scope.aImages[$scope.currentSwipe].src);




           move("#nextslide")
                .x(0)
                .duration('0.5s')
                .end();

           move("#currentslide")
                .ease('out')
                .x(destLeft)
                .duration('0.5s')
                .end(function() {
                   $timeout(function () {

                       move("#currentslide")
                           .ease('out')
                           .x(0)
                           .duration('0s')
                           .end();
                       $scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();
                       $scope.$apply();
                   });

                    $scope.slidewidth=$scope.aImages[$scope.currentSwipe].width;
                    $scope.slideheight=$scope.aImages[$scope.currentSwipe].height;
                    console.log($scope.aImages[$scope.currentSwipe].src);

                });

        }
        }
    $scope.swipeRight=function() {
        console.log("swiperight");
        if($scope.currentSwipe>0) {
            var destLeft= ($(window).width()-($scope.aImages[$scope.currentSwipe].width))*-1;
            var destRight=($(window).width()+$scope.aImages[$scope.currentSwipe].width);

            move("#nextslide")
                .x(destLeft)
                .duration('0s')
                .end();
            //$scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            $scope.currentSwipe--;
            $scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();

            //$scope.nextImageSrc=$scope.aImages[$scope.currentSwipe].src;
            console.log($scope.aImages[$scope.currentSwipe].src);




            move("#nextslide")
                .x(0)
                .duration('0.5s')
                .end();

            move("#currentslide")
                .ease('out')
                .x(destRight)
                .duration('0.5s')
                .end(function() {
                    $timeout(function () {

                        move("#currentslide")
                            .ease('out')
                            .x(0)
                            .duration('0s')
                            .end(function() {
                                $scope.imageSrc=$scope.aImages[$scope.currentSwipe].src+ '?' + new Date().getTime();
                                $scope.$apply();
                            });
                    });

                    $scope.slidewidth=$scope.aImages[$scope.currentSwipe].width;
                    $scope.slideheight=$scope.aImages[$scope.currentSwipe].height;
                    console.log($scope.aImages[$scope.currentSwipe].src);

                });


        }
    }


    $scope.goToSlide = function(index,groupIndex) {
       if($scope.currentSlideGroup!=groupIndex) {
           angular.copy($scope.cImages[groupIndex], $scope.aImages);
        }

        $scope.imageSrc=$scope.aImages[index].src;
        $scope.nextImageSrc=$scope.aImages[index].src;
        $scope.slidewidth=$scope.aImages[index].width;
        $scope.slideheight=$scope.aImages[index].height;

        $scope.currentSwipe=index;

      /*  $scope.modal.show();
        $ionicSlideBoxDelegate.$getByHandle('PopupSwipe').update();
        $ionicSlideBoxDelegate.$getByHandle('PopupSwipe').slide(0);
        $scope.modal.hide();
        $ionicSlideBoxDelegate.update();

        console.log(" slidemodal go to slide"+index);


        setTimeout(function() {
            $ionicSlideBoxDelegate.$getByHandle('PopupSwipe').update();
            $ionicSlideBoxDelegate.$getByHandle('PopupSwipe').slide(index);
            console.log("TIMEOUT MADUNNAPUTTANA");
            $scope.modal.show();
        },300)
       $scope.modal.show();
*/

        $scope.modal.show();
        //$(".modal-backdrop").css("opacity",0);


    };

    // Called each time the slide changes

});

myApp.controller('EvolutionSwipeCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate,$ionicScrollDelegate) {
    console.log("evolution modal");
    $scope.evolActiveSlide=3;

    $scope.evolImages = [{
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

    $scope.evolClose = function() {
        console.log("MADONNA PUTTANA");
        $(".evolOverlay").hide(300);
    };

    $scope.evolutionOpenPopUp=function(theSlide) {

        var corrente=0;
        console.log("EVOL POPUP");
        console.log("Top : ");
        //console.log("Top : " + $ionicScrollDelegate.getScrollPosition().top);
        console.log($scope.evolImages.length);

        for (i=0;i<$scope.evolImages.length;i++) {
            if($scope.evolImages[i].src.indexOf(theSlide)!=-1) {
                console.log("ccc "+$scope.evolImages[i].src);
                corrente=i;
                break;
            }

        }
        //console.log("Top : " + $ionicScrollDelegate.getScrollPosition().top);
        console.log("corrente"+corrente);
        try {
            $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(0);
        }catch (e) {
            console.log("error swipe");
        }


        setTimeout(function() {
            try {
                $ionicSlideBoxDelegate.$getByHandle('EvolutionSwipe').slide(corrente);
            } catch (e) {
                console.log("error swipe TIMER");
            }
            $(".evolOverlay").show(300);
        },100);
        //$ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(0);

        //$ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(index);


    };
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        console.log("modal2 slidechanged swipe"+ index);
        $scope.slideIndex = index;
    };
}
]);
