'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'ngDialog',function($scope, Global, ngDialog) {
    $scope.global = Global;

    $scope.open = function(){
    	alert("123");

	   ngDialog.open({
    template: 'abc.html'
});

		}

  }
]);
