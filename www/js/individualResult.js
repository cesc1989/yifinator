

var individual = angular.module('individual',['ionic']);

  individual.controller('IndividualCtrl', function($scope,$http){

  	$http.get('https://yts.re/api/movie.json?id=353').success(function(data){

  		$scope.movies = data;
  	});

  	$scope.alerta = function(){
  		console.log("dusde");
  	};

  });

  // individual.controller('experimentoCtrl', function($scope){

  // 	$scope.alerta = function(){
  // 		console.log("dusde");
  // 	};

  // });