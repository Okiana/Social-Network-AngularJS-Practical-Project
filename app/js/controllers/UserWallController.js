'use strict';

SocialNetwork.controller('UserWallController',
   function ($scope, $rootScope, userService, notifyService, pageSize) {
       $rootScope.pageTitle = "Home";

      $scope.getMyProfile = function () {
        userService.getMyProfile(
            function success() {
                notifyService.showInfo("Login successful");
                $location.path("/users/"+ sessionStorage['username']);
            },
            function error(err) {
                notifyService.showError("Login failed", err);
            })
      }




   }
);
