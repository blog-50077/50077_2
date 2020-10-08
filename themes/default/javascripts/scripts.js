$(document).ready(function() {
	$('.fancybox, a[rel=lightbox]').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

	$('.slideshow').cycle({
		fx: 'fade' //fade, scrollUp, shuffle, etc...
	});
	
	$('#s-menu').superfish({
		//add options here if required
	});
	 $('#kwicks').kwicks({  
        max : 350,  
        spacing : 5  
    });  
});