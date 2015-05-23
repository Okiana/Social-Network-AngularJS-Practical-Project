'use strict';

SocialNetwork.controller('RegisterController',
    function ($scope, $rootScope, $location, authentication, notifyService) {
       /* $rootScope.pageTitle = "Register";*/

        $scope.register = function() {
            authentication.register($scope.registerData,
                function success() {
                    notifyService.showInfo("User registered successfully");
                    $location.path("/users/"+ sessionStorage['username']);
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
