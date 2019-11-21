
document.addEventListener('DOMContentLoaded', function(e) {
	
	var body = document.getElementById('body');
	
	var showVideo = document.getElementById('show-video');
	var videoContainer = document.querySelector('.videoContainer');
	var videoDarkPane = document.querySelector('.videoDarkPane');

	showVideo.addEventListener('click', function(){
		videoContainer.classList.toggle('show');
		body.classList.add('noScroll');
	});
	
	// Close Social Panel
	
	videoDarkPane.addEventListener('click', function(){
		videoContainer.classList.toggle('show');
		body.classList.remove('noScroll');
	});

});

$(document).ready(function (){
	
	$('#scrollTo-screenshots').on('click', function() {
		$('html, body').animate({
			scrollTop: $("#screenshots").offset().top - 100
		}, 500);
	});
	
	$('#scrollTo-liveDemo').on('click', function() {
		$('html, body').animate({
			scrollTop: $("#live-demo").offset().top - 180
		}, 500);
	});
	
});
