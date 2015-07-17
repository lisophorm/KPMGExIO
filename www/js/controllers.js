var myApp=angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}).controller("SplashController",function($scope) {
        $scope.$on('$ionicView.beforeEnter', function(){
            console.log("beforeEnter splashcontroller");

            move("#KPMGheader")
                .set('height','0px')
                .duration('0.5s')
                .end();



        });
        $scope.$on('$ionicView.afterEnter', function(){
            console.log("afterEnter splashcontroller");

            move("#homeheader")
                .set('opacity','1')
                .duration('2s')
                .end();

            move("#homeheader")
                .set('letter-spacing','10px')
                .duration('2s')
                .delay('0.3s')
                .end();


            move("#homebutworld")
                .set('opacity','1')
                .duration('0.5s')
                .delay('0.8s')
                .end();

            move("#homebutclients")
                .set('opacity','1')
                .duration('0.5s')
                .delay('1.1s')
                .end();

            move("#homebutkpmg")
                .set('opacity','1')
                .duration('0.5s')
                .delay('1.4s')
                .end();

            move("#homesliceleft")
                .set('opacity','1')
                .duration('0.5s')
                .delay('0.3s')
                .end();

            move("#homeslicecentre")
                .set('opacity','1')
                .duration('0.5s')
                .delay('0.6s')
                .end();

            move("#homesliceright")
                .set('opacity','1')
                .duration('0.5s')
                .delay('0.9s')
                .end();

        });

        $scope.$on('$ionicView.beforeLeave', function(){
            console.log("afterLeave splashcontroller");

            move("#homesliceright")
                .set('opacity','0')
                .duration('0.1s')
                .end();

            move("#homesliceleft")
                .set('opacity','0')
                .duration('0.2s')
                .end();

            move("#homeslicecentre")
                .set('opacity','0')
                .duration('0.3s')
                .end();

        });

        $scope.$on('$ionicView.afterLeave', function(){
            console.log("afterLeave splashcontroller");

            move("#homebutworld")
                .set('opacity','0')
                .duration('0.5s')
                .end();

            move("#homebutclients")
                .set('opacity','0')
                .duration('0.5s')
                .end();

            move("#homebutkpmg")
                .set('opacity','0')
                .duration('0.5s')
                .end();


            move("#homeheader")
                .set('opacity','0')
                .duration('0s')
                .end();

            move("#homeheader")
                .set('letter-spacing','0px')
                .duration('0s')
                .end();

            move("#KPMGheader")
                .set('height','89px')
                .duration('0.5s')
                .end();
        });

    });

myApp.controller("WorldController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal,$ionicScrollDelegate,$timeout) {
    $scope.$on('slideBox.slideChanged', function (event, index) {
        console.debug('Slide box has been changed, current index is ' + index);
    });

    $scope.playJulio = function(){
        console.log("pressed julio");

    };
    $scope.callSlide = function(theIndex){
        console.log("pressed slide"+theIndex);
        $ionicSlideBoxDelegate.slide(theIndex);
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
                alt = 693;
                break;
            case 2:
                alt = 571+265;
                break;
            case 3:
                alt = 470+79;
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
        console.log("KPMG slide changed!" + index + " height:" + $(".slider").height());
        /*$timeout( function() {

            $ionicScrollDelegate.resize();
        }, 50);*/

    };

    $scope.$on('$ionicView.afterLeave', function () {
        console.log("World afterLeave");
        window.removeEventListener('deviceorientation', $scope.parallax, true);
    });
    $scope.$on('$ionicView.beforeEnter', function () {
        console.log("beforeEnter KPMGcontroller");

        window.addEventListener('deviceorientation', $scope.parallax , false);

        $(".slider-pager-page.active").css("stroke","#9f0 !important;");
        if ($stateParams.slideNum) {
            $ionicSlideBoxDelegate.slide( $stateParams.slideNum);

            // $ionicSlideBoxDelegate.slide($stateParams.slideNum)

        } else {
            $ionicSlideBoxDelegate.slide(0);

        }

        move("#KPMGheader")
            .set('height', '89px')
            .duration('0.5s')
            .end();

    });





});

