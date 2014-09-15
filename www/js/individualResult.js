

var individual = angular.module('individual',['ionic', 'searchResults']);

individual.controller('IndividualCtrl', function($scope,$http){

  $scope.recibirId = function(id){
    console.log(id);

    $http.get("https://yts.re/api/movie.json?id="+id+"").success(function(data){

      $scope.movies = data;
    });
  };

});