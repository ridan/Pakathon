'use strict';

angular.module('mean.create').controller('CreateController', ['$scope', 'Global', 'Create',
  function($scope, Global, Create) {
    $scope.global = Global;
    $scope.package = {
      name: 'create'
    };
  }
]);
