angular.module('Exo1Module', []);
angular.module("Exo1Module").controller("Exo1Controller", [ "$scope", function($scope) {
     $scope.value=0;
     $scope.calcul = function(value) { $scope.value++; return 100 - value; };
} ]);