$(document).ready(function(){
	// HomePage Loader
	$('.loader').delay(3000).fadeOut(2000);
	// Navigation container 
	$('.item ').on({
	mouseenter: function(){
		$('.loader').delay(750).fadeOut(200);
      	$('.wholepage').delay(750).fadeIn(1500);
		// BACKGROUND HOVER 
		$(this).css('background-color', '#25BDBE');
		// REPLACE ICON: REMOVE blue-png, ADD white-png for hover
		$(this).children('a').children('.nav-item-image').addClass('hidden');
		$(this).children('a').children('.nav-item-hover').removeClass('hidden');
		// TEXT HOVER
		$(this).children('a').children('.nav-item-text').css('color', 'white');
	}, 
	mouseleave: function(){
		// RESTORE BACKGROUND HOVER
		$(this).css('background-color', 'inherit');
		// RESTORE ICON: ADD blue-png, REMOVE white-png for hover
		$(this).children('a').children('.nav-item-image').removeClass('hidden');
		$(this).children('a').children('.nav-item-hover').addClass('hidden');
		//TEXT RESTORE
		$(this).children('a').children('.nav-item-text').css('color', 'inherit');
	}
	});

});
