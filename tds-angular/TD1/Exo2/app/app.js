var ServicesApp = angular.module('ServicesApp',[]);
ServicesApp.controller('ServicesController', [function() {
    var code=false;
    var remise='salut';
    var self=this;
    var services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":true
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];
    this.service = services;
    this.total = function(){
        var i =0;
        var cpt=0;
        for( var val in services){
            if(services[val].active==true)
                cpt++;
        }
        if(cpt == 0)
            return "Aucun service sélectionné";
        else if(cpt == 1)
            return "1 service selectionné"
        else
            return cpt+" services sélectionnés";
    };

    this.toggleActive = function(serv){
       for(var s in services){
           if(services[s]==serv) {
               if (services[s].active == false)
                   services[s].active = true;
               else
                   services[s].active=false;
           }
       }
    };

    this.getName = function(){
        for(var val in services)
            return services[val].name;
    };

    this.getActive = function(serv){
        for(var s in services)
            if(services[s]==serv)
                return services[s].active;
    };

    this.calcTotal = function(){
      var total = 0;
        for(var s in services){
            if(services[s].active==true)
                total+=services[s].price;
        }
        return total;
    };

    this.codeValid = function(){
        code=true;
    };

    this.code = function(){
        return code;
    };

    this.remise = function(){
        if(remise==self.value)
            return calcRemise(total);
        else
            return 'Code promo incorrect';
    };

    this.calcRemise=function(montant){
        return montant*20/100;
    };
}]);