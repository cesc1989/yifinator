
var app = angular.module('yifi', ['ionic','individual','searchs']);

app.run(function($ionicPlatform,$ionicLoading,$rootScope) {
  
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

  //interceptor http para mensaje de carga
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: 'Cargando resultados'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })

});


//Todas las rutas para la aplicacion

app.config(function($stateProvider,$httpProvider) {
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

  //interceptor de peticiones http para mostrar la pantalla de carga
  $httpProvider.interceptors.push(function($rootScope) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:show')
        return config
      },
      response: function(response) {
        $rootScope.$broadcast('loading:hide')
        return response
      }
    }
  });

});