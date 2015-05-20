SocialNetwork.controller('MainController', function ($scope, $location, mainData, authentication, notifyService) {

    $scope.username = authentication.GetUsername();

    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path('/');
    }

    var getSocial = function () {

        mainData.getFrinedsPost(
            function (serverData) {
                $scope.friendsPost = serverData;
            },
            function () {
                notifyService.showError("Unsuccessful Connection to Database!")
            });

        mainData.getUserSixFriends(
            function (serverData) {
                $scope.userFrinedsPriview = serverData;
            },
            function () {
                notifyService.showError("Unsuccessful Connection to Database!")
            });

        mainData.getPendingFriendship(
            function (serverData) {
                $scope.userFrineds = serverData;
            },
            function () {
                notifyService.showError("Unsuccessful Connection to Database!")
            });

    }

});