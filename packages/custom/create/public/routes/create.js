'use strict';

angular.module('mean.create').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('create example page', {
      url: '/create/example',
      templateUrl: 'create/views/index.html'
    });
  }
]);
