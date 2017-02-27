var contactApp = angular.module('contactApp',[]);
contactApp.controller('contactController', ["$http",function(http) {

    var self=this;

    //Variable contenant le contact à modifier
    this.contact;

    //Variable contenant le contact modifié par le formulaire
    this.tmpContact;

    //Chaîne indiquant la modification ou l'ajout d'un contact
    this.operation;

    // Contrôle l'affichage du formulaire d'ajout/modification
    this.edit;

    //Tableau des contacts existants
    var contacts =[
        {
            "nom":"ZUCKERBERG",
            "prenom":"Marc",
            "mail":"mark@facebook.com",
            "deleted":"false"
        },
        {
            "nom":"GATES",
            "prenom":"Bill",
            "mail":"bill@microsoft.com",
            "deleted":"false"
        }
    ];
    this.contacts=contacts;

    //Affiche le formulaire de modification du contact
    this.toUpdate = function(contact){

    };

    // Affiche le formulaire d'ajout d'un contact
    this.toAdd = function(){

    };

    // Ajoute le contact
    this.add = function(){
        contacts.nom='';
    };

    // Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
    this.update = function(){

    };

    //Supprime de la liste le contact
    this.delete = function(contact){
        for(cont in contacts){
            if(cont.value==contact.value){
                cont.delete="true";
            }
        }
    };
}]).directive('myContact', function() {
    return {
        restrict : 'A',
        scope : {contact: "="},
        templateUrl: 'contact.html'
    };
});