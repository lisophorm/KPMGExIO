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

            var ref = window.open('http://www.google.com', '_blank', 'toolbar=yes,enableViewportScale=yes,location=yes,width=300');
            /*

            console.log("play vidweo:"+theClip);
            $scope.clipSrc = theClip;
            $scope.openModal(); */

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