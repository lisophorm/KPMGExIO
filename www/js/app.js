// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngRetina'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                templateUrl: "templates/welcome.html",
                controller: 'SplashController'
            })

            .state('kpmg', {
                url: "/kpmg",
                templateUrl: "templates/kpmg.html",
                controller: 'KPMGController'


            })

            .state('world', {
                url: "/world/:slideNum",

                templateUrl: "templates/world.html",
                controller: 'WorldController'

            }).state('world2', {
                url: "/world",

                templateUrl: "templates/world.html",
                controller: 'WorldController'

            })
            .state('clients2', {
                url: "/clients/:slideNum",

                templateUrl: "templates/clients.html",
                controller: 'ClientsController'

            }).state('clients', {
                url: "/clients",

                templateUrl: "templates/clients.html",
                controller: 'ClientsController'

            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/');
    });
