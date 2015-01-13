/* Author: Tahmina Khan

*/


/***********
 * 
 * 
 * This part is to display just the selected section
 * 
 * 
 */

//onclick of the list items for navigation menu
  $( "li" ).click(function() {
  
  //Hide previous section
  
  $( "li" ).each(function( index ) {
  	
  		var eachSection= $(this).text();
  		//hiding each section of the list
  		
  		 $("#"+eachSection).hide();
  		 
  		 // removing selected list style
  		 $(this).children().removeClass("current");
	});
  
  	var currentSection= $(this).text();
   // showing the selected section
   $("#"+currentSection).fadeIn( "slow" );
   
   //adding selected style to the list
   $(this).children().addClass("current");
   
   if(checkBrowserSize()=='small')
    $("nav").hide("slow");
   
});



/************
 * For mobile screen 
 * Showing the expanded list
 */
$("#nav_icon").click(function(index){
	$("nav").toggle("slow");
	
});



/******************
 * 
 * Getting the actual size of the screen
 * 
 * 
 * 
 */


 var windowSize='';
 var windowWidth=0;
 var actualSize=0;
 
 function checkBrowserSize(){
 	//computing the total window size with the scroll bar
 	windowWidth=$(window).outerWidth();
 	
 	//computing the total body size with the scroll bar
 	var contentWidth=$('body').width();
 	
 	actualSize=windowWidth-(windowWidth-contentWidth);
 	
 	if(actualSize>800)
 			windowSize="large";
 
 		if((actualSize<=800)&&(actualSize>=500) )
 			windowSize="medium";
 			 	if(actualSize<500)
 					windowSize="small";	
 					
 			
 			return windowSize;
 	
 }
 
 
 /****************
  * Showing the navigation for large screen on window resize
  * 
  */
 
 



//$('#browserInfo').text('Browser (Width : ' + $(window).width() + ' , Height :' + $(window).height() + ' )');
	
    $(window).resize(function () {
    	
    	
		//$('#browserInfo').text('Browser (Width : ' + $(window).width() + ' , Height :' + $(window).height()+" " +checkBrowserSize()+ ' )');
		
		if(checkBrowserSize()!= 'small')
 				$("nav").show();
 		else
 			$("nav").hide();
    });
	


/********************
 *
 * Sending Emails using Ajax
 */

$("#submitButton").click(function (){
	
	$.ajax({
  		type: "POST",
  		url: "php/mail.php",
  		data: { email: $("#email").val(), first_name: $("#first_name").val(),comments: $("#comments").val()}
	}).done(function( msg ) {
    alert( "Email was sent " );
    $("#email").val("Email");
    $("#first_name").val("Name");
    $("#comments").val("Comments");
  });
	
	
	
});











