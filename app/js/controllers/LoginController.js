'use strict';

SocialNetwork.controller('LoginController',
    function ($scope, $rootScope, $location, authentication, notifyService) {
      /*  $rootScope.pageTitle = "Login";*/
    var ClearLogin = function () {
        $scope.loginData = ""
    };

       $scope.login = function() {
            authentication.login($scope.loginData,
                function success(serverData) {
                    notifyService.showInfo("Login successful");
                    authentication.SetCredentials(serverData);
                    ClearLogin();
                    $location.path("/users/"+ sessionStorage['username']);
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };
    }
);
