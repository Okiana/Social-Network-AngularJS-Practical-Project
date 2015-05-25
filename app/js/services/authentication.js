SocialNetwork.factory('authentication',
    function ($http, baseServiceUrl) {

        var serviceUrl = baseServiceUrl + '/users';

        return {
            login: function (loginData,success, error) {
                var request = {
                    method: 'POST',
                    url: serviceUrl + '/login',
                    data: loginData
                };
                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function (registerData, success, error) {
                var request = {
                    method: 'POST',
                    url: serviceUrl + '/register',
                    data: registerData
                };
                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function () {
                var request = {
                    method: 'POST',
                    url: serviceUrl + '/logout'
                   };
                $http(request).success(function (data) {
                    success(data);
                }).error(error);
            },

            isLoggedIn: function () {
                return localStorage['accessToken'];
            },
            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },
            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            }
        }
    });


