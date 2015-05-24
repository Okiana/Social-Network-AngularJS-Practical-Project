'use strict';

SocialNetwork.controller('HomeController',
   function ($scope, $rootScope, adsService, notifyService, pageSize) {
       $rootScope.pageTitle = "Home";

      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };


   }
);
