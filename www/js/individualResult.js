

var individual = angular.module('individual',['youtube-embed']);

individual.controller('IndividualCtrl', function($scope,$location,$window,$rootScope,$http,$translate){

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

  //var url = 'https://yts.to/api/v2/movie_details.json?movie_id='+$rootScope.movieId+'';
  var url = 'https://yts.to/api/v2/movie_details.json?movie_id=3047&with_images=true&with_cast=true';

  $http.get(url).success(function(data){
    $scope.movieData = data.data;
    movie = $scope.movieData.url;
    $scope.theBestVideo = $scope.movieData.yt_trailer_code;
  });

	/*TRADUCCIONES INGLES EN EL INDIVIDUAL*/
	$translate(['INDIVIDUAL.BACK','INDIVIDUAL.HEADLINE','INDIVIDUAL.RUNTIME','INDIVIDUAL.LANGUAGE','INDIVIDUAL.RATING','INDIVIDUAL.YEAR','INDIVIDUAL.GENRE','INDIVIDUAL.TRAILER','INDIVIDUAL.GOTOWEBSITE'])
	  .then(function (translations){
	  	$scope.back = translations['INDIVIDUAL.BACK'];
		$scope.headline = translations['INDIVIDUAL.HEADLINE'];
		$scope.runtime = translations['INDIVIDUAL.RUNTIME'];
		$scope.language = translations['INDIVIDUAL.LANGUAGE'];
		$scope.rating = translations['INDIVIDUAL.RATING'];
		$scope.year = translations['INDIVIDUAL.YEAR'];
		$scope.genre = translations['INDIVIDUAL.GENRE'];
		$scope.trailer = translations['INDIVIDUAL.TRAILER'];
		$scope.gotowebsite = translations['INDIVIDUAL.GOTOWEBSITE'];
	});

});