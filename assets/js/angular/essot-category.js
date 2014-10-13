var essotApp = angular.module('essotApp', []);

essotApp.controller('essotController', function($scope, $http, $location) {

 	$scope.productData = [];

 	var url = "http://122.160.164.121:8080/essotg/rest/productCategory/242";

   	$http.get(url)
         .success(function(data) {

		 $scope.loaded = true;
		 $scope.productData = data;

	}).error(function(err) {
       console.log(err);
   });


	
});

essotApp.directive('slideRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      angular.element(document.querySelector('#slides')).slidesjs({
	            width: 1020,
	            height: 456,
	            navigation: {
	              active: false,
	                // [boolean] Generates next and previous buttons.
	                // You can set to false and use your own buttons.
	                // User defined buttons must have the following:
	                // previous button: class="slidesjs-previous slidesjs-navigation"
	                // next button: class="slidesjs-next slidesjs-navigation"
	              effect: "slide"
	                // [string] Can be either "slide" or "fade".
	            },
	            play: {
	              active: false,
	                // [boolean] Generate the play and stop buttons.
	                // You cannot use your own buttons. Sorry.
	              effect: "slide",
	                // [string] Can be either "slide" or "fade".
	              interval: 5000,
	                // [number] Time spent on each slide in milliseconds.
	              auto: true,
	                // [boolean] Start playing the slideshow on load.
	              swap: true,
	                // [boolean] show/hide stop and play buttons
	              pauseOnHover: false,
	                // [boolean] pause a playing slideshow on hover
	              restartDelay: 2500
	                // [number] restart delay on inactive slideshow
	            }
          });     
    }
  };
});