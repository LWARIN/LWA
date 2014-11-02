'use strict';

/**
 * @ngdoc function
 * @name lwaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lwaApp
 */
angular.module('conduireSmartApp')
  .controller('MainCtrl', ['authenticationService', function ($scope, authenticationService) {
    $scope.selectedTab = 1500;
    $scope.credentials = {
      mail: 'lwa@pe.com',
      pwd: 'toto',
      remember: false
    };

    $scope.sendLoginForm = function () {
      if (authenticationService.login($scope.credentials.mail, $scope.credentials.pwd)) {
        window.console.log('CONNECT : ' + $scope.credentials.mail + ' - ' + $scope.credentials.pwd + ' - FAILED ! ');
      } else {
        window.console.log('CONNECT : ' + $scope.credentials.mail + ' - ' + $scope.credentials.pwd + ' - SUCCESS !');
      }
    };
  }]);
