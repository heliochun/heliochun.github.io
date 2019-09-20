
document.addEventListener('DOMContentLoaded', function(e) {
	
	var getSocial = document.getElementById('getSocial');
	var showSocial = document.getElementById('showSocial');

	getSocial.addEventListener('click', function(){
		showSocial.classList.toggle("show");
	});
	
	// Close Social Panel
	
	showSocial.addEventListener('click', function(){
		showSocial.classList.toggle("show");
	});

});

