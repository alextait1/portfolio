$(function(){
	
	$('.scroll').on('click', function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 600);
		return false;
	});

   if ($(this).width() > 480) {
       new WOW().init();     
   }
});

