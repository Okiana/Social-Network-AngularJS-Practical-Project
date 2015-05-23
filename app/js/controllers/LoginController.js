'use strict';

SocialNetwork.controller('LoginController',
    function ($scope, $rootScope, $location, authentication, notifyService) {
      /*  $rootScope.pageTitle = "Login";*/

        $scope.login = function() {
            authentication.login($scope.loginData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/users/"+ sessionStorage['username']);
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };
    }
);
