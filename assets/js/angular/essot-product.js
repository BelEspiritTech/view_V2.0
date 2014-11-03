var essotApp = angular.module('essotApp', []);

essotApp.controller('essotController', function($scope, $http, $location) {

 var skuName = $location.url().split('/')[1];
 var url = "http://122.160.164.121:8090/essotg/rest/product/detail/" + skuName;
 //beta/v2.2/assets/img/FuzionBT002
 var imageJsonPath = "assets/img/"+skuName+"/images.json" ;
 $scope.productData = [];
 $scope.thumbImages = [];

$http.get(url)
	 .success(function(data) {
			$scope.loaded = true;
			$scope.productData = data;

			$scope.relatedSkuLoops = 0;

			if($scope.productData.details.relatedskus != null){
				$scope.relatedSkuLoops = Math.ceil($scope.productData.details.relatedskus.length/3);
			}

			$http.get(imageJsonPath)
				 .success(function(data) {
					$scope.thumbImages = data;
					
					var imageBreak = $scope.thumbImages.images[0].split('_');
					var largeImage = "assets/img/" +imageBreak[0]+"/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_large.jpg";
					var XlargeImage = "/marketing/image/" +imageBreak[0]+"/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg";

					angular.element(document.querySelector('#one')).attr("src",largeImage);

					/*var options = {	zoomSizeMode :'zoom',
									zoomOffsetX : 80,
									zoomOffsetY : 25,
									zoomImage : "/marketing/image/" +imageBreak[0]+"/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg"};

					angular.element(document.querySelector('#one')).CloudZoom(options); */					
			
				}).error(function(err) {
					console.log(err);
				});

	}).error(function(err) {
		console.log(err);
});

$scope.toggleEnCode = function(data) {
		var imageBreak = $scope.thumbImages.images[data].split('_');
		var largeImage = "assets/img/" +imageBreak[0]+"/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_large.jpg";
		
		/*angular.element(document.querySelector('#one')).data('CloudZoom').destroy();
		var options = {zoomSizeMode :'zoom',
		                zoomOffsetX : 80,
						zoomOffsetY : 25,
				 		zoomImage : "/marketing/image/" +imageBreak[0]+"/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg"};
		 
		*/
		angular.element(document.querySelector('#one')).attr("src",largeImage);
		//angular.element(document.querySelector('#one')).CloudZoom(options); 
		
};
    
$scope.getStrSpecValue = function(data1,data2){
          return data1+ " : " +data2;
};

$scope.goToProduct = function(data) {
	var url = "product.html#/"+data.relSKU;
	window.location.href = url; 
	window.location.reload(false);
};

});

essotApp.filter('range', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i=0; i<range; i++)
      val.push(i);
    return val;
  };
});
