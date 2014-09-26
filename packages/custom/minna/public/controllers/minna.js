'use strict';

angular.module('mean.minna').controller('MinnaController', ['$scope', 'Global', 'Minna',
  function($scope, Global, Minna) {
    $scope.global = Global;
    $scope.package = {
      name: 'minna'
    };
  }
]);
