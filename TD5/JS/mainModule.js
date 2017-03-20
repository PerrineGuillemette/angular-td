/*var app = angular.module('CurrencyApp',[]);
app.controller('currencyController', ["$http",function(http)*/
angular.module("sampleApp").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl1'
        }).
        when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl1'
        }).
        when('/route3',{
            templateUrl: 'templates/in/exit.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl1'
        }).
        when('/route4',{
            templateUrl: 'templates/in/list.html',
            controller: 'mainController',
            controllerAs: 'rtCtrl1'
        });
    }]);

//là faut mettre la factory config