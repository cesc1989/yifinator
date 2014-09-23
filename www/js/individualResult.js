

var individual = angular.module('individual',[]);

individual.controller('IndividualCtrl', function($scope,$rootScope,$http){

  $scope.ide = "";
  
  $scope.recibirId = function(id){
     // console.log(typeof id)
     $scope.ide = id;
     // console.log($scope.ide);
     // var url = 'https://yts.re/api/movie.json?id='+$scope.ide+'';
     // console.log(url);
     $rootScope.movieId = $scope.ide;
  };
  
  // console.log($rootScope.movieId);
  var url = 'https://yts.re/api/movie.json?id='+$rootScope.movieId+'';

  $http.get(url).success(function(data){

    $scope.movieData = data;
    // console.log($scope.movieData.MovieTitle);
    // console.log($scope.movieData);

  });

});