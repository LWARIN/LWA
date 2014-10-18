'use strict';

/**
 * @ngdoc function
 * @name lwaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lwaApp
 */
angular.module('lwaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
