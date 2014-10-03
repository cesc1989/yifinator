// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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

  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'searchResults.html'
  });

  $stateProvider.state('individual',{
    url: '/individual',
    templateUrl: 'individualResult.html'
  });

  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'searchBox.html'
  });
});