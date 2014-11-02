'use strict';

angular.module('conduireSmartApp')
  .controller('DriverCtrl', function ($scope) {

    $scope.selectedTab = 0;

    $scope.switchTab = function (index) {
      if (angular.isNumber(index) && index !== $scope.selectedTab) {
        $scope.selectedTab = index;
      }
    };

    $scope.getCssTab = function (index) {
      return index === $scope.selectedTab ? 'active' : '';
    };

  });
