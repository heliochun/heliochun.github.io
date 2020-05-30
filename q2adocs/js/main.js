

$(document).ready(function(){
	
	// Show dropdown list
	$('.nav-item').click(function(e) {
		// $(this).addClass('current-dropdown');
		$('.sub-nav').addClass('display-none');
		$(this).siblings('.sub-nav').removeClass('display-none');
		e.stopPropagation();
	});
	
	// Welcome scroll to Section
	$('.scrollToSection').click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $('.homepage-container').offset().top - 66
		}, 600);
	});
	
	// scroll to top button
	$(window).scroll(function() {
		
		if($(this).scrollTop() > 800) {
			$('#jump-top').addClass('show-btt-button');
		} else 	{
			$('#jump-top').removeClass('show-btt-button');
		}
		
		// Remove class when scrolled to parent
		var $jtcOt = $('.jump-top-container').offset().top,
			$jtcOh = $('.jump-top-container').outerHeight(),
			$wH = $(window).height();
		
		if ($(this).scrollTop()> ($jtcOt+$jtcOh-$wH)){
		   $('#jump-top').removeClass('show-btt-button');
		}
		
	});
	
	// Sidebar Documentation Handlers
	$('h1, h2, h3, h4, h5, h6').each(function(index,element) {
		var dataId = $(this).attr('id');
		$('.docs-nav').append('<li class="docs-nav-item" data-attr-scroll="'+ dataId +'">' + $(this).text() +'</li>');
	});
	
	$('body').on('click', '.docs-nav-item', function() {
        
		event.preventDefault(); 
		
		$('.docs-nav-item').removeClass('bold-text');
		$(this).addClass('bold-text');

        var defaultAnchorOffset = 0;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset; 

        $('html,body').stop().animate({
            scrollTop: $('#'+anchor).offset().top - anchorOffset - 90
        }, 500);
    });
	
	
	// Jump back to Top
	$('#jump-top').click(function() {
		$('html, body').stop().animate({
		   scrollTop: 0
		}, 500);
	});
	
	// Remove all shenanigans
	$('body,html').click(function(event) {
		// $('.nav-item').removeClass('current-dropdown');
		$('.sub-nav').addClass('display-none');
	});

});