var essotHeaderApp = angular.module('essotHeaderApp', []);

essotHeaderApp.controller('essotHeaderController', function($scope, $http, $location) {
  
  $scope.searchText;

  $http.get('http://122.160.164.121:8080/essotg/rest/category/menu')
       .success(function(data) {
         $scope.loaded    = true;
         $scope.menuList  = data;
    }).error(function(err) {
        console.log(err);
   }); 

   $scope.search = function() {
		var url = "search.html?key="+$scope.searchText;
		window.location.href = url	
   };
});