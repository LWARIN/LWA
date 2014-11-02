'use strict';

/**
 * /!\ This is a temporary file. It shall be replaced by a http request to the server /!\
 */
angular.module('conduireSmartApp')
  .factory('credentials', ['roles', function (roles) {
    return [
      {
        identifier: 'lwa@pe.fr',
        password: 'toto',
        name: 'Laurent Warin',
        role: roles.DRIVER
      },
      {
        identifier: 'nmo@pe.fr',
        password: 'toto',
        name: 'Nicolas Monnier',
        role: roles.INSTRUCTOR
      },
      {
        identifier: 'hta@pe.fr',
        password: 'toto',
        name: 'Habib Tafo',
        role: roles.MANAGER
      }
    ];
  }]);
