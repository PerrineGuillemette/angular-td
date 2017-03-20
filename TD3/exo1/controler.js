/**
 * Created by Perrine on 28/02/2017.
 */
var app = angular.module('CurrencyApp',[]);
app.controller('currencyController', ["$http",function(http) {

    var self=this;

//variable Objet stockant la liste des monnaies alimentée
//par le fichier JSON currencymap.json au démarrage du contrôleur
this.currencies;

// variable stockant la monnaie source (à initialiser en euro
this.from='US';
//    variable stockant la monnaie cible (à initialiser en dollars US)
this.to;
//variable stockant le montant à convertir (à initialiser à 1)
this.what=1;
//  variable donnant le résultat de la conversion
this.result;

/*Retourne le résultat en effectuant une requête JSONP vers l'adresse free.currencyconverterapi.com
 Modifie en retour la variable result*/
this.getResult = function(){

};

//Echange la monnaie source et la monnaie cible
this.swap = function(){};

}])
