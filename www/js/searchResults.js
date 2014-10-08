var searches = angular.module('searchs', []);

searches.controller('searchResultsCtrl', function($scope,$location,$ionicLoading, $rootScope, $http) {

	//obtengo la cadena con los terminos de busqueda
	$scope.recibirTerminos = function(terminos){
		$rootScope.termino = terminos;
	};

	$scope.volverAtras = function(){
    	$location.path("/");
  	};

	$http.get('https://yts.re/api/list.json?keywords='+$rootScope.termino+'').success(function(data) {
		$scope.resultMovies = data.MovieList;
		//console.log($scope.resultMovies);
	});

});