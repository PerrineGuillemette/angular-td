var messageNote;
var info;
app.controller("ctrlName",["$cookies",function($cookies){
  var cookie = $cookies.get('myFavorite');
  $cookies.put('myFavorite', 'oatmeal');
}]);
