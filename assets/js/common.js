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



/**
 * Javascript for popup window
 * */

function popup(url) {
    alert('The URL About to open is');
    var newwindow=window.open(url,'name','height=600,width=500');
    if (window.focus) {newwindow.focus()}
    return false;
}