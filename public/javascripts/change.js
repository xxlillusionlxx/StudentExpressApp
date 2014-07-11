$(function () {
	$('.light').click( function() {
		var light_bg = '/images/bg1.jpg';
		$('body').css('background-image', 'url('+light_bg+')')
		console.log("Click was received.")
	});
	$('.dark').click( function() {
		var dark_bg = '/images/bg3.jpg';
		$('body').css('background-image', 'url('+dark_bg+')');
		console.log("Click was received");
	});
});