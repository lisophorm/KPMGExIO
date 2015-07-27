myApp.controller('FullscreenImageCtrl',
    function ($scope, $ionicModal) {
        console.log("popup controller");
        $ionicModal.fromTemplateUrl('image-modal.html', {
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
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
        $scope.$on('modal.shown', function () {
            console.log('Modal is shown!');
        });

        $scope.imageSrc = 'img/popups/age_manufatrueing.jpg';

        $scope.showImage = function (index) {
            console.log("click on showImge:"+index);
            switch (index) {
                case 1:
                    $scope.imageSrc = 'img/popups/age_manufatrueing.jpg';
                    break;
                case 2:
                    $scope.imageSrc = 'img/popups/age_distribution.jpg';
                    break;
                case 3:
                    $scope.imageSrc = 'img/popups/age_informtion.jpg';
                    break;
                case 4:
                    $scope.imageSrc = 'img/popups/age_customer.jpg';
                    break;
                // clients
                case 5:
                    $scope.imageSrc = 'img/popups/02_popup_01.png';
                    break;
                case 6:
                    $scope.imageSrc = 'img/popups/02_popup_02.png';
                    break;
                case 7:
                    $scope.imageSrc = 'img/popups/02_popup_03.png';
                    break;
                case 8:
                    $scope.imageSrc = 'img/popups/02_popup_04.png';
                    break;
                case 9:
                    $scope.imageSrc = 'img/popups/02_popup_05.png';
                    break;
                case 10:
                    $scope.imageSrc = 'img/popups/02_popup_06.png';
                    break;
                // KPMG slide 4
                case 11:
                    $scope.imageSrc = 'img/popups/circle1.png';
                    break;
                case 12:
                    $scope.imageSrc = 'img/popups/circle2.png';
                    break;
                case 13:
                    $scope.imageSrc = 'img/popups/circle3.png';
                    break;
                case 14:
                    $scope.imageSrc = 'img/popups/circle4.png';
                    break;
                case 15:
                    $scope.imageSrc = 'img/popups/circle5.png';
                    break;
            }
            $scope.openModal();

        }
    });

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

        }

        $scope.play = function(src) {
            var media = new Media(src, null, null, mediaStatusCallback);
            $cordovaMedia.play(media);
        }

        var mediaStatusCallback = function(status) {
            if(status == 1) {
                $ionicLoading.show({template: 'Loading...'});
            } else {
                $ionicLoading.hide();
            }
        }
    });

myApp.controller('SlideSwipeCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {

    $scope.currentSlideGroup=99;

    $scope.cImages=Array();
    $scope.cImages[0] = [{
        'src' : 'img/popups/age_manufatrueing.jpg',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_distribution.jpg',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_informtion.jpg',
        'width' : 616,
        'height' : 539
    }, {
        'src' : 'img/popups/age_customer.jpg',
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
        'height' : 541
    }, {
        'src' : 'img/popups/circle2.png',
        'width' : 1024,
        'height' : 541
    },{
        'src' : 'img/popups/circle3.png',
        'width' : 1024,
        'height' : 541
    },{
        'src' : 'img/popups/circle4.png',
        'width' : 1024,
        'height' : 541
    },{
        'src' : 'img/popups/circle5.png',
        'width' : 1024,
        'height' : 541
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

    $ionicModal.fromTemplateUrl('image-modal2.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $ionicSlideBoxDelegate.slide(0);
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
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

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.goToSlide = function(index,groupIndex) {
        if($scope.currentSlideGroup!=groupIndex) {
            angular.copy($scope.cImages[groupIndex], $scope.aImages);
        }
        console.log(" slidemodal go to slide"+index);
        $scope.modal.show();
        $ionicSlideBoxDelegate.$getByHandle('PopupSwipe').slide(index);
    }

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        console.log("modal2 slidechanged swipe"+ index);
        $scope.slideIndex = index;
    };
}
]);

myApp.controller('EvolCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate,$ionicScrollDelegate) {
    console.log("evolution modal");
    $scope.evolActiveSlide=3;
    setTimeout(function() {
        $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(1);
    },500);
    $scope.evolImages = [{
        'src' : 'img/popups/EVOL_BLANK.png',
        'width' : 1024,
        'height' : 542
    },{
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

    $ionicModal.fromTemplateUrl('image-modal3.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(0);
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
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

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.goToSlide = function(index) {
        console.log("GO TO SLIDE"+corrente);
        $scope.modal.show();
        $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(index);
    }
    $scope.evolPopup=function(theSlide) {

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
        setTimeout(function() {
            try {
                $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(corrente);
            } catch (e) {
                console.log("error swipe TIMER");
            }
            $scope.modal.show();
        },100)
        //$ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(0);
        try {
            $ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(0);
        }catch (e) {
                console.log("error swipe");
            }
        //$ionicSlideBoxDelegate.$getByHandle('EvolSwipe').slide(index);


    }
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        console.log("modal2 slidechanged swipe"+ index);
        $scope.slideIndex = index;
    };
}
]);

