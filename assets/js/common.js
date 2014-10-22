/**
 * @Javascripts used for common assests
 */

var tpj = jQuery;
tpj.noConflict();
tpj(document).ready(function() {
   
    angular.bootstrap(document.getElementById("headerContent"),['essotHeaderApp']);  
    angular.bootstrap(document.getElementById("titleContent"),['essotTitleApp']);
    
    tpj('#tipue_drop_input').tipuedrop();

    


    tpj(window).on('scroll', function() {
        if (tpj(window).scrollTop() > 166) {
            tpj('.fixed-header').show();
        } else {
            tpj('.fixed-header').hide();
        }
    });


    // jQuery UItoTop
    tpj().UItoTop({
        easingType: 'easeOutQuart'
    });
});
