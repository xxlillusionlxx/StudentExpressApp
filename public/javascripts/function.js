$(function () {
	$('.nav_bar').click( function() {
		var active = $('.nav_bar.active');
		if(active.length != 0)
			active.removeClass('active');

		$(this).addClass('active');
		console.log("Click was received.")
	});
});