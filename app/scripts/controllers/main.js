'use strict';

/**
 * @ngdoc function
 * @name lwaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lwaApp
 */
angular.module('conduireSmartApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'mainText',
    function ($scope, $timeout, mainText) {

      // Scope definitions
      $scope.product = mainText.PRODUCT;
      $scope.company = mainText.COMPANY;

      // Text fade in out
      var fadeCounter = 0;

      $scope.onTimeout = function () {
        fadeCounter++;
        if (fadeCounter >= mainText.PROFILES.length) {
          fadeCounter = 0;
        }
        $scope.fadeText = mainText.PROFILES[fadeCounter];
        mytimeout = $timeout($scope.onTimeout, 1500);
      };

      var mytimeout = $timeout($scope.onTimeout, 1500);

      $scope.stop = function () {
        $timeout.cancel(mytimeout);
      };

    }]);
