var app = angular.module('ListesApp',[]);
app.controller('ListesController', ["$http",function(http) {

    var self=this;
  //Tableau des produits disponibles défini en JSON (utiliser le service $http)
    self.dispoItems =[
      {
          "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
          "title": "50 Must-have plugins for extending Twitter Bootstrap",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
          "title": "Making a Super Simple Registration System With PHP and MySQL",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
          "title": "Create a slide-out footer with this neat z-index trick",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/06/digital-clock/",
          "title": "How to Make a Digital Clock with jQuery and CSS3",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
          "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
          "title": "Mini AJAX File Upload Form",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
      },
      {
          "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
          "title": "Your First Backbone.js App – Service Chooser",
          "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
      }
    ];
  //Tableau des produits à inclure
    self.includedItems=[];
  //Tableau des éléments sélectionnés dans la liste des produits disponibles
    self.selectedDispoItems=[];
  //Tableau des éléments sélectionnés dans la liste des produits à inclure
    self.selectedIncludedItems=[];

    self.step=1;//vaut 1 ou 2
    /*$http.get("data/products.json").success(function(data){
        self.dispoItems =data;
    });*/
    //Ajoute les produits disponibles en surbrillance (selectedDispoItems) à la liste des produits à inclure (includedItems)
    self.addToIncluded = function(){
        self.selectedIncludedItems=[];
        angular.forEach(self.selectedDispoItems, function(value){
            self.includedItems.push(value);
            self.selectedIncludedItems.push(value);
            self.dispoItems.splice(self.dispoItems.indexOf(value),1);
        });
        self.selectedDispoItems=[];
    };

    //Ajoute tous les produits disponibles (dispoItems) à la liste des produits à inclure (includedItems)
    self.addAllToIncluded = function(){
        self.includedItems.push.apply(self.includedItems, self.dispoItems);
        self.dispoItems=[];
        self.selectedDispoItems=[];
    };

    //Retire les produits sélectionnés en surbrillance (selectedIncludedItems) pour les remettre dans la liste des produits disponibles (items)
    self.removeFromIncluded=function(){
        self.selectedDispoItems=[];
        angular.forEach(self.selectedIncludedItems, function (value) {
            self.dispoItems.push(value);
            self.selectedDispoItems.push(value);
            self.includedItems.splice(self.includedItems.indexOf(value),1);
        });
        self.selectedIncludedItems=[];
    };

    //Retire tous les produits à inclure (includedItems) pour les remettre dans la liste des produits disponibles (items)
    self.RemoveAllFromIncluded = function(){
        self.dispoItems.push.apply(self.dispoItems, self.includedItems);
        self.includedItems=[];
        self.selectedIncludedItems=[];
    };
    self.selectItem=function(){
        self.addToIncluded();
    };
    self.deselectItem=function(){
        self.removeFromIncluded();
    };
}])