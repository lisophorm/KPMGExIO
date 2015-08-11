// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ngAnimate', 'ui.router','ngCordova','starter.controllers','ionic.ion.imageCacheFactory'])

    .run(function ($ionicPlatform,$templateCache,$http) {

       /* var templates = [
            "templates/kpmg.html",
            "templates/world.html",
            "templates/clients.html",
        ];

        for(i=0;i<templates.length;i++){
            var template = templates[i];
            if ($templateCache.get(template)){
                return; //prevent the prefetching if the template is already in the cache
            }
            $http.get(template).success(function (t) {
                console.log("TEMPLATE PREFETCHED");
                $templateCache.put(template, t);
            });
        }*/

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
            //screen.lockOrientation('landscape');
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                cache: true,
                url: "/app",
                templateUrl: "templates/welcome.html",
                controller: 'SplashController'
            })

            .state('kpmg', {
                cache: true,
                url: "/kpmg",
                templateUrl: "templates/kpmg.html",
                controller: 'KPMGController'


            }).state('kpmg2', {
                cache: true,
                url: "/kpmg/:slideNum",
                templateUrl: "templates/kpmg.html",
                controller: 'KPMGController'


            })

            .state('world', {
                cache: true,
                url: "/world/:slideNum",

                templateUrl: "templates/world.html",
                controller: 'WorldController'

            }).state('world2', {
                cache: true,
                url: "/world",

                templateUrl: "templates/world.html",
                controller: 'WorldController'

            })
            .state('clients2', {
                cache: true,
                url: "/clients/:slideNum",

                templateUrl: "templates/clients.html",
                controller: 'ClientsController'

            }).state('clients', {
                cache: true,
                url: "/clients",

                templateUrl: "templates/clients.html",
                controller: 'ClientsController'

            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app');
    });
angular.module('ionic.ion.imageCacheFactory', [])

    .factory('$ImageCacheFactory', ['$q', '$timeout', function($q, $timeout) {
        return {
            Cache: function(urls) {
                var promises = [];
                for (var i = 0; i < urls.length; i++) {
                    var deferred = $q.defer();
                    var img = new Image();

                    img.onload = (function(deferred) {
                        return function(){
                            deferred.resolve();
                        }
                    })(deferred);

                    img.onerror = (function(deferred,url) {
                        return function(){
                            deferred.reject(url);
                        }
                    })(deferred,urls[i]);

                    promises.push(deferred.promise);
                    img.src = urls[i];
                }
                return $q.all(promises);
            }
        }
    }]).config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(10);
});