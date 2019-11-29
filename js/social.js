
document.addEventListener('DOMContentLoaded', function(e) {
	
	var getSocial = document.getElementById('getSocial');
	var showSocial = document.getElementById('showSocial');
	var body = document.getElementById('body');

	getSocial.addEventListener('click', function(){
		showSocial.classList.toggle("show");
	});
	
	// Close Social Panel
	
	showSocial.addEventListener('click', function(){
		showSocial.classList.toggle("show");
	});

});