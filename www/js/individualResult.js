

var individual = angular.module('individual',[]);

individual.controller('IndividualCtrl', function($scope,$location,$rootScope,$http){
  
  $scope.recibirId = function(id){
     $rootScope.movieId = id;
  };

  $scope.goBack = function(){
    // $ionicNavBarDelegate.back();
    $location.path("/search");
  };
  
  // console.log($rootScope.movieId);
  var url = 'https://yts.re/api/movie.json?id='+$rootScope.movieId+'';
  //var url = 'https://yts.re/api/movie.json?id=5515';

  $http.get(url).success(function(data){

    $scope.movieData = data;
    // console.log($scope.movieData.MovieTitle);
    // console.log($scope.movieData);

  });

});