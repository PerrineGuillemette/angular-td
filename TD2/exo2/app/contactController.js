var contactApp = angular.module('contactApp',[]);
contactApp.controller('contactController', ["$http",function(http) {

    var self=this;

    //Variable contenant le contact à modifier
    this.contact=null;

    //Variable contenant le contact modifié par le formulaire
    this.tmpContact=null;

    //Chaîne indiquant la modification ou l'ajout d'un contact
    this.operation=null;

    // Contrôle l'affichage du formulaire d'ajout/modification
    this.edit=0;

    //Tableau des contacts existants
    this.contacts =[
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

    //Affiche le formulaire de modification du contact
    this.toUpdate = function(contact){
        edit=2;
    };

    // Affiche le formulaire d'ajout d'un contact
    this.toAdd = function(){
        edit=1;
    };

    // Ajoute le contact
    this.add = function(){
        contacts.nom='';
    };

    // Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
    this.update = function(){
        return contacts;
    };

    //Supprime de la liste le contact
    this.delete = function(contact){
        for(cont in contacts){
            if(cont.nom==contact.nom){
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
/*    $http.post("fichier.php",{info:'hello world'}).
 success(function(data, status) {
 document.getElementById("info").innerHTML = "Ca marche !"
 }).
 error(function(data, status) {
 document.getElementById("erreur").innerHTML = "Erreur lors de l'envoi"
 });*/