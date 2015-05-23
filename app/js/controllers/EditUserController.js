'use strict';

SocialNetwork.controller('EditUserController',
    function ($scope, $rootScope, $location, authentication, notifyService){

    $scope.editUser = function() {
        authentication.editUser($scope.editUserData,
            function success() {
                notifyService.showInfo("Profile edited successfully");
                $location.path("/users/"+ sessionStorage['username']);
            },
            function error(err) {
                notifyService.showError("Cannot edit profile ", err);
            }
        );
    };
});