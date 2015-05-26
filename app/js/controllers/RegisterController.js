'use strict';

SocialNetwork.controller('RegisterController',
    function ($scope, $rootScope, $location, authentication, notifyService) {
       /* $rootScope.pageTitle = "Register";*/
        var ClearRegister = function () {
            $scope.registerData = ""
        };


        $scope.register = function() {
            authentication.register($scope.registerData,
                function success(serverData) {
                    notifyService.showInfo("User registered successfully");
                    authentication.SetCredentials(serverData);
                    ClearRegister();
                    $location.path("/users/"+ sessionStorage['username']);
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
