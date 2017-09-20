const ohHey = "Hello World";

console.log(ohHey);


$(function(){
	
	$('.scroll').on('click', function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 600);
		return false;
	});

	$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

});

