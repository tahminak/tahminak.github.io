


/**********
 * 
 * Bootstrap Scrollspy
 * 
 */   

        $('body').scrollspy({
            target: '.navbar',
            offset: 200
        });
 /*******
  * Wow.JS initializer
  * 
  */
         new WOW().init();
            
/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
$(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})