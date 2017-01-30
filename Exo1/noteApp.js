var app = angular.module('app',[]);
app.controller('NbController', [function() {
    var messageNote = "";//cookie.show();
    var info = "";
    var self=this;
	this.value="";
    this.count = function() {
        if(self.value != "" && self.value!=messageNote)
            info = "Message modifié";
        return 100-self.value.length;
	};
	this.clear = function(){
        self.value="";
	};
	this.save = function(){
		messageNote = self.value;
        info="Message sauvegardé";
        if (messageNote != "") {
            cookie.enreg();
        }
	};
    this.show = function(){

        return info;
    };
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