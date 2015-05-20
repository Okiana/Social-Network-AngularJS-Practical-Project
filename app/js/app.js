var SocialNetwork = angular.module("SocialNetwork", ['ngRoute']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'partials/welcome-screen.html',
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