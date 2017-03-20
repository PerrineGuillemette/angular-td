var app = angular.module('app',["ngCookies"]);
app.controller('NbController', ["$cookies",function(cookies) {
    var self=this;
    var info = "";
    this.value = cookies.get('messageNote');
    this.status=1;

    this.count = function() {
        if(self.value != "" && self.value!=cookies.get('messageNote') )
            info = "Message modifié";
        if(100-self.value.length<20)
            self.status=2;
        else if(100-self.value.length<10)
            self.status=3;
        else
            self.status=1;
        return 100-self.value.length;
	};
	this.clear = function(){
	    info = "";
        self.value="";
	};
	this.save = function(){
        info="Message sauvegardé";
        if (self.value != "") {
            cookies.put('messageNote', self.value);
        }
	};
    this.show = function(){
        return info;
    };
}]);
