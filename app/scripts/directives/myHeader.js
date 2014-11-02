'use strict';

angular.module('conduireSmartApp')
  .controller('MyHeaderCtrl', ['$scope', '$location', 'authenticationService', 'roles',
    function ($scope, $location, authenticationService, roles) {

      $scope.credentials = {
        mail: 'lwa@pe.fr',
        pwd: 'toto'
      };

      $scope.session = {};

      /**
       * Validation on parameters and call authentication service
       */
      $scope.sendLoginForm = function () {
        $scope.session = authenticationService.login($scope.credentials.mail, $scope.credentials.pwd);

        if (angular.isObject($scope.session) && angular.isDefined($scope.session.name) && angular.isDefined($scope.session.role)) {
          window.console.log('CONNECTED AS ' + $scope.session.name + ' - ' + $scope.session.role);
          $('#loginModal').modal('hide');
        } else {
          window.console.log('CONNECTION FAILED...');
        }

        $scope.redirectToHome();
      };

      $scope.redirectToHome = function () {

        var path = '#';

        if (angular.isDefined($scope.session.role)) {
          switch ($scope.session.role) {
            case roles.DRIVER:
              path = '/driver';
              break;
            case roles.INSTRUCTOR:
              path = '/instructor';
              break;
            case roles.MANAGER:
              path = '/manager';
              break;
            default:
              path = '/';
          }
        }
        window.console.log('REDIRECT TO HOME : ' + $scope.session.role + ' - path=' + path);
        $location.path(path);
      };

      $scope.sendLogoutForm = function () {
        $scope.session = authenticationService.logout();
        $scope.redirectToHome();
      };

    }])
  .directive('myHeader', function () {
    return {
      restrict: 'E',
      controller: 'MyHeaderCtrl',
      templateUrl: 'views/my-header.html'
    };
  });
