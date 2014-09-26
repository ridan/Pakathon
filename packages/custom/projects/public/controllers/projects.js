'use strict';

angular.module('mean.projects').controller('ProjectsController', ['$scope', 'Global', 'Projects',
  function($scope, Global, Projects) {
    $scope.global = Global;
    $scope.package = {
      name: 'projects'
    };
  }
]);
