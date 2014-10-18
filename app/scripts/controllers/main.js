'use strict';

/**
 * @ngdoc function
 * @name lwaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lwaApp
 */
angular.module('lwaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
