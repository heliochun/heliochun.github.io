

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

// Too lazy at this hour of the night for Vanilla
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});