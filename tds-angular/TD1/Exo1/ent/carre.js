var myApp = angular.module('myApp',[]);
 
myApp.controller('CarreController', ['$scope', function($scope) {
    $scope.value=0;
    $scope.carre = function(value) { return value * value; };
}]);