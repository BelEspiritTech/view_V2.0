var essotHeaderApp = angular.module('essotHeaderApp', []);

essotHeaderApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);    
      }
 ]);

essotHeaderApp.controller('essotHeaderController', function($scope, $http, $location) {
  
  $scope.searchText;

  $http.get('http://ec2-54-169-51-153.ap-southeast-1.compute.amazonaws.com:8080/essotg/rest/category/menu')
       .success(function(data) {
         $scope.loaded    = true;
         $scope.menuList  = data;
    }).error(function(err) {
        console.log(err);
   }); 

   $scope.search = function() {
		  var url = "/search.html?key="+$scope.searchText;
		  window.location.href = url	
   };

   $scope.loadCategoryPage = function(data) {
      var url = "category.html#/"+data.categoryID;
      window.location.href = url; 
      window.location.reload(false);
    };
});