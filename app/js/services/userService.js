SocialNetwork.factory('userService',
    function ($http, baseServiceUrl, authService, authentication) {
        return {

            getMyProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserProfile: function (data ,success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            editUserPassword: function (data ,success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + 'me/changepassword',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }

    }});