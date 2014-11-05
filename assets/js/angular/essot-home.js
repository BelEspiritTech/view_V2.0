var essotApp = angular.module('essotApp', []);

essotApp.controller('essotController', function($scope, $http, $location) {

	$http.get('http://122.160.164.121:8090/essotg/rest/category/home')
	.success(function(data) {
		$scope.loaded = true;
		$scope.displayItems = data;
		$scope.temp = "audio";

	}).error(function(err) {
		console.log(err);
	});

	//$scope.init = function(initJsor){
        //if(initJsor){
         	//jssorcall();
			//angular.element(document.querySelector('#banner_0')).attr("src","assets/img/audio.jpg");
        //}
	//};
});

essotApp.directive('sliderRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
	      angular.element(document.querySelector('.responsive')).slick({
	        dots: false,
	        infinite: false,
	        speed: 300,
	        slidesToShow: 3,
	        slidesToScroll: 4,
	        autoplay: true,
	        autoplaySpeed: 4000,
	        responsive: [{
	            breakpoint: 1024,
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 3,
	                infinite: true,
	                dots: true
	            }
	        }, {
	            breakpoint: 600,
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 2
	            }
	        }, {
	            breakpoint: 480,
	            settings: {
	                slidesToShow: 1,
	                slidesToScroll: 1
	            }
	        }]
	    });
  	}
 }; 
});

essotApp.directive('fadeboxInitDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
	      angular.element(document.querySelector('.fade1')).slick({
        	dots: false,
        	infinite: true,
        	speed: 500,
        	fade: true,
        	autoplay: false,
        	autoplaySpeed: 4000,
        	arrows: false,
        	slide: 'div',
        	cssEase: 'linear'
    	});
  	}
 }; 
});

essotApp.directive('fadeboxSecondInitDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
	      angular.element(document.querySelector('.fade2')).slick({
        	dots: false,
        	infinite: true,
        	speed: 500,
        	fade: true,
        	autoplay: true,
        	autoplaySpeed: 4000,
        	arrows: false,
        	slide: 'div',
        	cssEase: 'linear'
    	});
  	}
 }; 
});

essotApp.directive('bannerImageDirective', function () {
   return {
        link: function ($scope, element, attrs) {
           var imagePath = "assets/img/"+$scope.displayItems.categories[$scope.$index].categoryName+".jpg"
           attrs.$set('src', 'assets/img/audio.jpg');
        }
    };
});

essotApp.directive('bannerThumbDirective', function () {
   return {
        link: function ($scope, element, attrs) {
           var imagePath = "assets/img/"+$scope.displayItems.categories[$scope.$index].categoryName+"_thumb.jpg"
           attrs.$set('src', 'assets/img/audio_thumb.jpg');

           if($scope.$last){
           		jssorcall();
           }
        }
    };
});

