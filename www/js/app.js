
var app = angular.module('yifi', ['ionic','individual','searchs']);

app.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


//router

app.config(function($stateProvider) {
  //ruta para la página de resultados de búsqueda
  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'searchResults.html'
  });
  //ruta para la página de una película individualmente
  $stateProvider.state('individual',{
    url: '/individual',
    templateUrl: 'individualResult.html'
  });
  //ruta para la página inicial
  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'index.html'
  });
});