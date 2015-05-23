var SocialNetwork = angular.module("SocialNetwork", ['ngResource','ngRoute']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/welcome', {
            templateUrl:'partials/welcome-screen.html',
            controller:'WelcomeController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        })
        .when('/users/:username', {
        templateUrl: 'partials/user-wall.html',
        controller: 'UserWallController'

        })
        .otherwise('/welcome');
});