
// Too lazy at this hour of the night for Vanilla
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');

		$(this).addClass('current');
		$('#tabsContent').removeAttr('class');
		$('#tabsContent').addClass('slide-'+tab_id);
	});
	
	$('.mobileSelectedNav').click(function(){
		$('.mobileNav').toggleClass('showMenu');
	});
	
	$('body,html').click(function(event) {
		if ($(event.target).closest('.mobileSelectedNav, .mobileNav').length === 0) {
			$('.mobileNav').removeClass('showMenu');
		}
	});

});