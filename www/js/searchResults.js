var searches = angular.module('searchs', []);

searches.controller('searchResultsCtrl', function($scope, $http) {

	$http.get('https://yts.re/api/list.json?keywords=harry').success(function(data) {
		$scope.resultMovies = data.MovieList;
		console.log($scope.resultMovies);
	});

});