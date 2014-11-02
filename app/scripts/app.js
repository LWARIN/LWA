'use strict';

/**
 * @ngdoc overview
 * @name lwaApp
 * @description
 * # lwaApp
 *
 * Main module of the application.
 */
angular
  .module('conduireSmartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/driver', {
        templateUrl: 'views/driver.html',
        controller: 'DriverCtrl'
      })
      .when('/instructor', {
        templateUrl: 'views/instructor.html',
        controller: 'InstructorCtrl'
      })
      .when('/manager', {
        templateUrl: 'views/manager.html',
        controller: 'ManagerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
