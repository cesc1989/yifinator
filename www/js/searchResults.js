
var searches = angular.module('searchs', []);

searches.controller('searchResultsCtrl', function($scope,$location,$ionicLoading,$rootScope,$http,$translate) {

	//obtengo la cadena con los terminos de busqueda
	$scope.recibirTerminos = function(terminos){
		$rootScope.termino = terminos;
	};

	$scope.goBack = function(){
		// $ionicNavBarDelegate.back();
		$location.path("/home");
	};

	$http.get('https://yts.to/api/v2/list_movies.json?query_term='+$rootScope.termino+'').success(function(data) {

		if(data.error){
			//console.log(data.status);
			$scope.errorData = data;
		}else{
			$scope.resultMovies = data.data.movies;
			//console.log(data.data.movies);
		}

	});

	/*TRADUCCIONES INGLES EN EL HOME*/
	$translate(['HOME.HEADLINE','HOME.INTROTEXT','HOME.PLACEHOLDER','HOME.BUTTON_TEXT'])
	  .then(function (translations){
		$scope.headline = translations['HOME.HEADLINE'];
		$scope.introtext = translations['HOME.INTROTEXT'];
		$scope.placeholder = translations['HOME.PLACEHOLDER'];
		$scope.button_text = translations['HOME.BUTTON_TEXT'];
	});

	/*TRADUCCIONES INGLES EN RESULTADOS*/
	$translate(['SEARCH.HEADLINE','SEARCH.BACK','SEARCH.ERROR_MESSAGE'])
	  .then(function (translations){
	  	$scope.search_headline = translations['SEARCH.HEADLINE'];
	  	$scope.back = translations['SEARCH.BACK'];
	  	$scope.error_message = translations['SEARCH.ERROR_MESSAGE'];
	});

});