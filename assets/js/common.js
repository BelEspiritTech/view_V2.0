/**
* @Javascripts used for common assests
*/
	
				var tpj = jQuery;
                tpj.noConflict();
                tpj(document).ready(function () {
                	
                	// Loading the modules.	
	                //tpj("#headerContent").load("header.html");
	              	//tpj("#footerContent").load("footer.html");	
	                //tpj("#aboutUsContent").load("aboutus.html");
	                //tpj("#contactUsContent").load("contactus.html");
	                //tpj("#privacyPolicyContent").load("privacypolicy.html");
	                //tpj("#tnCContent").load("termsandconditions.html");
	                
	                tpj('#tipue_drop_input').tipuedrop();	
	               	
	               	
                        tpj('.responsive').slick({
                                dots: false,
                                infinite: false,
                                speed: 300,
                                slidesToShow: 4,
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


                            tpj('.fadebox').slick({
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
                            

                            tpj(window).on('scroll', function() {
                                if (tpj(window).scrollTop() > 166) {
                                    tpj('.fixed-header').show();
                                } else {
                                    tpj('.fixed-header').hide();
                                }
                            });        


	               	// jQuery UItoTop
	                tpj().UItoTop({ easingType: 'easeOutQuart' });


                    // Carousal in the Category Page
                    tpj('#slides').slidesjs({
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

                });
                
               