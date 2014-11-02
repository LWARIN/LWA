'use strict';

angular.module('conduireSmartApp')
  .service('authenticationService', ['credentials', function (credentials) {

    /**
     Try to authenticate a user
     * @param login the user identifier
     * @param password the user password
     * @returns {{}}
     */
    this.login = function (login, password) {

      var session = {};

      credentials.forEach(function (user) {
        if (login === user.identifier && password === user.password) {
          session.name = user.name;
          session.role = user.role;
        }
      });

      return session;
    };

    this.logout = function () {
      return {};
    };
  }]);
