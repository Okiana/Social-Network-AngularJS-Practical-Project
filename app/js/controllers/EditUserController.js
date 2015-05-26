'use strict';

SocialNetwork.controller('EditUserController',
    function ($scope, $rootScope, $location, userService, notifyService){

        var clear = function () {
            $scope.editUserPasswordData = "";
            $scope.editUserData = ""
        };


    $scope.editUser = function() {
        userService.editUserProfile($scope.editUserData,
            function success() {
                notifyService.showInfo("Profile edited successfully");
                clear();
                $location.path("/users/"+ sessionStorage['username']);
            },
            function error(err) {
                notifyService.showError("Cannot edit profile ", err);
            }
        );
    };

    $scope.editPassword = function() {
           userService.editUserPassword($scope.editUserPasswordData,
            function success() {
                notifyService.showInfo("Password edited successfully");
                clear();
                $location.path("/users/"+ sessionStorage['username']);
            },
            function error(err) {
                notifyService.showError("Can't edit password ", err);
            }
        );
    };

});



