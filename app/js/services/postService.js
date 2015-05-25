SocialNetwork.factory('postService', function ($http, baseServiceUrl, authService, authentication) {

    var serviceUrl = baseServiceUrl + '/Posts/';
    return {
            makePost: function (makePostData, success, error) {
                var request = {
                    method: 'POST',
                    url: serviceUrl,
                    headers: authentication.getAuthHeaders(),
                    data: makePostData
                };
                $http(request).success(success).error(error);
            },
            deletePost: function (id, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + id,
                headers: authentication.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        editPost: function (id, editPostData, success, error) {
            var request = {
                method: 'PUT',
                url: serviceUrl + id,
                headers: authentication.getAuthHeaders(),
                data:editPostData
            };
            $http(request).success(success).error(error);
        }

    }

});
SocialNetwork.factory('postService', function ($http, baseServiceUrl, authService, authentication) {

    var serviceUrl = baseServiceUrl + '/Posts/';
    return {
        makePost: function (makePostData, success, error) {
            var request = {
                method: 'POST',
                url: serviceUrl,
                headers: authentication.getAuthHeaders(),
                data: makePostData
            };
            $http(request).success(success).error(error);
        },
        deletePost: function (id, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + id,
                headers: authentication.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        editPost: function (id, editPostData, success, error) {
            var request = {
                method: 'PUT',
                url: serviceUrl + id,
                headers: authentication.getAuthHeaders(),
                data: editPostData
            };
            $http(request).success(success).error(error);
        },
        getPostById: function (id, editPostData, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + id,
                headers: authentication.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        }

    }

});