

var individual = angular.module('individual',[]);

individual.controller('IndividualCtrl', function($scope,$location,$window,$rootScope,$http){

  $scope.recibirId = function(id){
     $rootScope.movieId = id;
  };

  $scope.goBack = function(){
    // $ionicNavBarDelegate.back();
    $location.path("/search");
  };
  
  var movie = "";

  $scope.openUrl = function(){
    var ref = $window.open(movie,'_system','location=no');
  };
  
  var url = 'https://yts.re/api/movie.json?id='+$rootScope.movieId+'';
  //var url = 'https://yts.re/api/movie.json?id=5515';

  $http.get(url).success(function(data){
    $scope.movieData = data;
    movie = $scope.movieData.TorrentUrl;
  });

});