var essotTitleApp = angular.module('essotTitleApp', []);

essotTitleApp.controller('essotTitleController', function($scope, $http, $location) {
  $scope.pageTitle = 'Electronic | Essot India';
  var current_url = $location.url();

  if(current_url.indexOf("category") != -1){
  
    var catID = current_url.split('/')[1];;
    var url = "http://122.160.164.121:8090/essotg/rest/category/list/" + catID;
    $http.get(url)
       .success(function(data) {
          $scope.pageTitle = 'Electronic | '+ data.categories + 'Essot India';
        }).error(function(err) {
            console.log(err);
        });

  }else if(current_url.indexOf("product") != -1){
      
      var skuName = current_url.split('/')[1];
      var url = "http://122.160.164.121:8090/essotg/rest/product/pagetitle/" + skuName;
      $http.get(url)
        .success(function(data) {
          $scope.pageTitle = "Electronic | " + data + " | Essot India";
         }).error(function(err) {
              console.log(err);
         });

  }else if(current_url.indexOf("search") != -1){
      $scope.searchText = $location.search()['key'];
      $scope.pageTitle = "Essot Search | "+ $scope.searchText;
  }
});