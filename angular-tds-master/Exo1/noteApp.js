var app = angular.module('app',[]);
app.controller('NbController', [function() {
    var messageNote = "";
    var status=false;
    var info = "";
    var self=this;
	this.value="";
    this.count = function() { 
		return 100-self.value.length;
		status=true;
		info = "Message modifié";
	};
	this.clear = function(){
        self.value="";
	};
	this.save = function(){
		messageNote = self.value;
        if (messageNote != "") {
            cookie.enreg();
        }
        status=true;
        info="Message sauvegardé";
	};
    this.show = function(){
        return info;
    };
    this.status = function(){
        return status;
    }
}]);

var cookie = angular.module('appName', ['ngCookies']);

cookie.controller("ctrlCookie",["$cookies",function($cookies){
    var favoriteCookie = "";
    this.enreg = function() {
            favoriteCookie = messageNote;
    };
    this.show = function () {
        return favoriteCookie;
    }
}]);