
document.addEventListener('DOMContentLoaded', function(e) {
	
	var showSocial = document.getElementById('showSocial');
	var body = document.getElementById('body');

	$('.getSocial').on('click', function(){
		$('#showSocial').toggleClass('show');
	});
	
	// Close Social Panel
	
	showSocial.addEventListener('click', function(){
		showSocial.classList.toggle('show');
	});

});