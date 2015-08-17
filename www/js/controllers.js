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
            console.log("beforeEnter splashcontroller SPLASH");

            TweenLite.to(document.getElementById('homeheader'), 0, {opacity:0,letterSpacing:"0px",autoRound:false});
            TweenLite.to(document.getElementById('homebutworld'), 0, {opacity:0});
            TweenLite.to(document.getElementById('homebutclients'), 0, {opacity:0});
            TweenLite.to(document.getElementById('homebutkpmg'), 0, {opacity:0});
            TweenLite.to(document.getElementById('homesliceleft'), 0, {opacity:0});
            TweenLite.to(document.getElementById('homeslicecentre'), 0, {opacity:0});
            TweenLite.to(document.getElementById('homesliceright'), 0, {opacity:0});

            angular.element(document.getElementById("splash")).css("display","");

            TweenLite.to(document.getElementsByClassName('KPMGheader'), 0.3, {height:"0px",ease:Sine.easeInOut}).delay(0.4);

            var header=document.getElementsByClassName("KPMGheader");

            angular.element(header).removeClass("open");



        });
        $scope.$on('$ionicView.afterEnter', function(){
            console.log("afterEnter splashcontroller");

            TweenLite.to(document.getElementById('homeheader'), 1, {opacity:1,letterSpacing:"10px",autoRound:false,ease:Sine.easeInOut}).delay(0.5);
            TweenLite.to(document.getElementById('homebutworld'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(0.9);
            TweenLite.to(document.getElementById('homebutclients'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(1.3);
            TweenLite.to(document.getElementById('homebutkpmg'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(1.6);
            TweenLite.to(document.getElementById('homesliceleft'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(0.5);
            TweenLite.to(document.getElementById('homeslicecentre'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(0.8);
            TweenLite.to(document.getElementById('homesliceright'), 0.5, {opacity:1,ease:Sine.easeInOut}).delay(1.1);



        });

        $scope.$on('$ionicView.afterLeave', function(){
            angular.element(document.getElementById("splash")).css("display","none");

        });

        $scope.$on('$ionicView.beforeLeave', function(){
            console.log("afterLeave splashcontroller");

            TweenLite.to(document.getElementsByClassName('KPMGheader'), 0.3, {height:"89px",ease:Sine.easeInOut});


        /*    move("#KPMGheader")
                .set('height','89px')
                .duration('0.5s')
                .end(); */
        });

    }).controller('HeaderCtrl', function($scope, $ionicModal, $timeout,$state,$ImageCacheFactory,$ionicSlideBoxDelegate,$ionicHistory) {

        $scope.goWorld = function() {
            $ionicHistory.clearHistory();
            console.log("CRODINOOO");

            $ImageCacheFactory.Cache([
                "img/title_world.png",
                "img/common_world.jpg",
                "img/title_world@2x.png",
            ]).then(function(){
                $state.transitionTo('world', {slideNum:0});
                try {
                    $ionicSlideBoxDelegate.$getByHandle('WorldSwipe').slide(0);
                } catch(e) {
                    console.log("yet to initialize");
                }
                console.log("Images done loading!");
            },function(failed){
                console.log("An image filed: "+failed);
            });




        }

        $scope.goClients = function() {
            $ionicHistory.clearHistory();
            console.log("CRODINOOOclients");

            $ImageCacheFactory.Cache([
                "img/title_clients.png",
                "img/common_clients.jpg",
                "img/title_clients@2x.png",
            ]).then(function(){
                $state.transitionTo('clients2', {slideNum:0});
                try {
                    $ionicSlideBoxDelegate.$getByHandle('ClientSwipeDelegate').slide(0);
                } catch(e) {
                    console.log("yet to initialize");
                }
                console.log("Images done loading!");
            },function(failed){
                console.log("An image filed: "+failed);
            });




        }

        $scope.goKPMG = function() {
            $ionicHistory.clearHistory();
            console.log("CRODINOOOkpmg");

            $ImageCacheFactory.Cache([
                "img/title_kpmg.png",
                "img/common_kpmg.jpg",
                "img/title_kpmg@2x.png",
            ]).then(function(){
                console.log("Images done loading!");
                $state.transitionTo('kpmg2', {slideNum:0});
                try {
                    $ionicSlideBoxDelegate.$getByHandle('KPMGSwipeHandle').slide(0);
                } catch(e) {
                    console.log("yet to initialize");
                }
            },function(failed){

                console.log("An image filed: "+failed);
            });




        }

    });



