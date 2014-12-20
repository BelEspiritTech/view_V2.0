var essotApp = angular.module('essotApp', []);

essotApp.controller('essotController', function($scope, $http, $location) {

 var skuName = window.location.pathname.split('/')[2];
 var url = "http://ec2-54-169-51-153.ap-southeast-1.compute.amazonaws.com:8080/essotg/rest/product/detail/" + skuName;

 var imageJsonPath = "/assets/json/"+skuName+".json" ;
 $scope.productData = [];
 $scope.thumbImages = [];
 $scope.productLink = window.location.pathname;
 $scope.s3Bucket = "https/s3-ap-southeast-1.amazonaws.com/essot/";


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
				 	$scope.thumbLoops = 0;
					$scope.thumbImages = data;
					
					if($scope.thumbImages.images != null){
						$scope.thumbLoops = Math.ceil($scope.thumbImages.images.length/4);
					}

					var imageBreak = $scope.thumbImages.images[0].split('_');
					var largeImage = "/essot_img/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_large.jpg";
					var XlargeImage = "/essot_img/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg";

					angular.element(document.querySelector('#one')).attr("src",largeImage);

					var options = {	zoomSizeMode :'zoom',
									zoomOffsetX : 80,
									zoomOffsetY : 25,
									zoomImage : "/essot_img/"+ imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg"};

					angular.element(document.querySelector('#one')).CloudZoom(options);					
			
				}).error(function(err) {
					console.log(err);
				});

	}).error(function(err) {
		console.log(err);
});

$scope.toggleEnCode = function(data) {
		var imageBreak = data.split('_');
		var largeImage = "/essot_img/" + imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_large.jpg";
		
		angular.element(document.querySelector('#one')).data('CloudZoom').destroy();
		var options = {zoomSizeMode :'zoom',
		                zoomOffsetX : 80,
						zoomOffsetY : 25,
				 		zoomImage : "/essot_img/" + imageBreak[0] + "_" + imageBreak[1] + "_" + imageBreak[2] + "_xlarge.jpg"};
		 
		angular.element(document.querySelector('#one')).attr("src",largeImage);
		angular.element(document.querySelector('#one')).CloudZoom(options); 
		
};
    
$scope.getStrSpecValue = function(data1,data2){
          return data1+ " : " +data2;
};

$scope.goToProduct = function(data) {
	var url = "product.html#/"+data.relSKU;
	window.location.href = url; 
	window.location.reload(false);
};

$scope.fbpopup = function(){
    var url = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.pathname;
    var newwindow=window.open(url,'name','height=600,width=500');
    if (window.focus) {newwindow.focus()}
    return false;
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
