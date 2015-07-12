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

    }).controller("KPMGController",function($scope) {
        $scope.$on('$ionicView.afterEnter', function(){
            console.log("afterenter KPMGcontroller");
        });

    }).controller("ClientsController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate) {
        $scope.$on('slideBox.slideChanged', function (event, index) {
            console.debug('Slide box has been changed, current index is ' + index);
        });

        $scope.slideChanged = function(index) {
            console.log("client slide changed!"+index);

        };



            if ($stateParams.slideNum) {
                //$scope.myActiveSlide = $stateParams.slideNum;
                $ionicSlideBoxDelegate.slide($stateParams.slideNum);
                console.log("ciao clients" + $stateParams.slideNum);
            } else {
                //$scope.myActiveSlide = 0;
                console.log("client cazzonoparam");
                $ionicSlideBoxDelegate.slide(0);
            }

    });

myApp.controller("WorldController",function($scope, $location, $stateParams,$ionicSlideBoxDelegate,$ionicModal) {
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


    $scope.slideChanged = function(index) {
        console.log("world slide changed!"+index);
        /* switch(index) {
         case n:
         code block
         break;
         //default:
         // default code block
         }*/

    };
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

