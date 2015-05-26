SocialNetwork.factory('userService',
    function ($http, baseServiceUrl, authentication) {
        return {

            getMyProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserProfile: function (editUserData ,success, error) {
                  var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders(),
                    data: editUserData
                };
                $http(request).success(success).error(error);
            },
            editUserPassword: function (data ,success, error) {
                    var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/me/ChangePassword',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            getNewsFeed: function (startPostId, pageSize,success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/me/feed?PageSize='+ pageSize,
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getFrDetailFriendsList: function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + $routeParams.username + '/friends',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getFrFriendsPreview : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + $routeParams.username + '/friends/preview',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getMyFriendsPreview : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'me/friends/preview',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getMyFriendsList  : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl  + '/me/friends',
                    headers: authentication.getAuthHeaders()
                 };
                $http(request).success(success).error(error);
            },
            getMyFriendsRequest  : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl  + '/me/requests',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            sendFriendRequest  : function (headers, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl  + '/me/requests',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }

    }});


