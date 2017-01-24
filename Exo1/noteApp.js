var app = angular.module('app',[]);

app.controller('NbController', [function() {
    this.value=0;
    this.calcul = function() { return 100-this.value; };
}]);