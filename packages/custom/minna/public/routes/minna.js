'use strict';

angular.module('mean.minna').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('minna example page', {
      url: '/minna/example',
      templateUrl: 'minna/views/index.html'
    });
  }
]);
