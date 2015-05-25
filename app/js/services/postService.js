SocialNetwork.factory('postService', function ($http, baseServiceUrl) {
    var data = {};

    data.params = {};

    data.getFrinedsPost = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };


    return data;
});