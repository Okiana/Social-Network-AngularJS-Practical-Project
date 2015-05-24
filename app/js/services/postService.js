SocialNetwork.factory('mainData', function ($http, baseServiceUrl) {
    var data = {};

    data.params = {};

    data.getFrinedsPost = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };
    data.getUserSixFriends = function (succes, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };
    data.getPendingFriendship = function (succes, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    return data;
});