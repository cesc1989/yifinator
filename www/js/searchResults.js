
var searches = angular.module('searchs', []);

searches.controller('searchResultsCtrl', function($scope,$location,$ionicLoading,$rootScope, $http) {

	//obtengo la cadena con los terminos de busqueda
	$scope.recibirTerminos = function(terminos){
		$rootScope.termino = terminos;
	};

	$scope.goBack = function(){
		// $ionicNavBarDelegate.back();
		$location.path("/home");
	};

	$http.get('https://yts.re/api/list.json?keywords='+$rootScope.termino+'').success(function(data) {

		if(data.error){
			//console.log(data.status);
			$scope.errorData = data;
		}else{
			$scope.resultMovies = data.MovieList;
			//console.log($scope.resultMovies);
		}

	});

});