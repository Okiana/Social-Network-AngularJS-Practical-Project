var SocialNetwork = angular.module("SocialNetwork", []);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'partials/welcome-screen',
            controller:'MainController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'MainController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'MainController'
        })
});