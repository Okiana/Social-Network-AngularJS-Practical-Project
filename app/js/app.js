var SocialNetwork = angular.module("SocialNetwork", ['ngResource','ngRoute','ngFileUpload']);

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
        controller: 'GetNewsFeedController'

        })
        .when('/profile',{
            templateUrl: 'partials/user-edit-profile.html',
            controller: 'EditUserController'
        })
        .when('/profile/password',{
            templateUrl: 'partials/user-edit-password.html',
            controller: 'EditUserController'
        })
        .otherwise('/welcome');
});