var essotTitleApp = angular.module('essotTitleApp', []);

essotTitleApp.controller('essotTitleController', function($scope, $http, $location) {
  $scope.pageTitle = 'Electronic | Essot India';
  var current_url = window.location.pathname;

  if(current_url.indexOf("category") != -1){
  
    var catID = current_url.split('/')[2];;
    var url = "http://ec2-54-169-51-153.ap-southeast-1.compute.amazonaws.com:8080/essotg/rest/category/list/" + catID;
    $http.get(url)
       .success(function(data) {
          $scope.pageTitle = 'Electronic | '+ data.categories + 'Essot India';
        }).error(function(err) {
            console.log(err);
        });

  }else if(current_url.indexOf("product") != -1){
      
      var skuName = current_url.split('/')[2];
      var url = "http://ec2-54-169-51-153.ap-southeast-1.compute.amazonaws.com:8080/essotg/rest/product/pagetitle/" + skuName;
      $http.get(url)
        .success(function(data) {
          $scope.pageTitle = "Electronic | " + data + " | Essot India";
         }).error(function(err) {
              console.log(err);
         });

  }else if(current_url.indexOf("search") != -1){
      $scope.searchText = window.location.search.substring(1).split('=')[1];
      $scope.pageTitle = "Essot Search | "+ $scope.searchText;
  }
});