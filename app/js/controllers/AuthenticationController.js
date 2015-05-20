SocialNetwork.controller('AuthenticationController', function ($scope, $location, $route,
                                                               authentication, mainData, adServices, adminServices, notifyService) {

    var ClearData = function () {
        $scope.loginData = "";
        $scope.registerData = "";
        $scope.userData = "";
        $scope.passwordData = "";
    };


    $scope.login = function () {
        authentication.Login($scope.loginData,
            function(serverData) {
                notifyService.showInfo("Successful Login!");
                authentication.SetCredentials(serverData);
                ClearData();
                if(authentication == "true") {
                    $location.path('/user/home');
                }
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError)
            });
    };


});