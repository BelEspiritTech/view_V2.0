var essotApp = angular.module('essotApp', []);

essotApp.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);		
      }
 ]);

essotApp.controller('essotController', function($scope, $http, $location) {
	$scope.searchText = $location.search()['key'];
});
