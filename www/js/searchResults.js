var searches = angular.module('searchResults', ['ionic','individual']);

searches.controller('searchResultsCtrl', function($scope, $http) {

	$http.get('https://yts.re/api/list.json?keywords=harry').success(function(data) {
		$scope.resultMovies = data.MovieList;
		console.log($scope.resultMovies);
	});

});