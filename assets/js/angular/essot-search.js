var essotApp = angular.module('essotApp', []);

essotApp.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);		
      }
 ]);

essotApp.controller('essotController', function($scope, $http, $location) {
	$scope.searchText = $location.search()['key'];
	var url = "http://122.160.164.121:8090/essotg/rest/search/" + $scope.searchText;
	$http.get(url).success(function(data) {
		$scope.loaded = true;
		$scope.data = data;

	}).error(function(err) {
		console.log(err);
	});
});
