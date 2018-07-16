var proLi = $('.navAnchor');

proLi.on('click', function() {
	var plAnch = $("#" + $(this).attr("data-anchor")),
	domTarget = $("html,body");
	domTargetOffset = plAnch.offset().top
	domTarget.animate({
		scrollTop: domTargetOffset
	}, 200, function() {
		if ($(window).width() < 1000) {
			setTimeout(function(){
				$('#navigation').removeClass('menuActive');
				$('#dark-pane').addClass('hidden');
				$('body').removeClass('no-scroll');
			},50);
		}
	});
});

(function() {
	var delay = false;

	$(document).on('mousewheel DOMMouseScroll', function(event) {
		if(!$('#project-loader').hasClass('slideContent')) {
			event.preventDefault();
			if(delay) return;

			delay = true;
			setTimeout(function(){delay = false},200)

			var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

			var a= document.getElementsByTagName('section');
			if(wd < 0) {
			  for(var i = 0 ; i < a.length ; i++) {
				var t = a[i].getClientRects()[0].top;
				if(t >= 40) break;
			  }
			}
			else {
			  for(var i = a.length-1 ; i >= 0 ; i--) {
				var t = a[i].getClientRects()[0].top;
				if(t < -20) break;
			  }
			}
			
			if(i >= 0 && i < a.length) {
			  $('html,body').animate({
				scrollTop: a[i].offsetTop
			  }, 250);
			}
		} // if has class
	});
})();

/* Material design Ripple effect */
var b = document.querySelectorAll('.navButton');

for (var i = 0; i < b.length; i++) {
    c = b[i];
    c.addEventListener('click', function(){
        var that = this;
        that.classList.add('rippleCircle');
        setTimeout(function(){
            that.classList.remove('rippleCircle');
        },500);
    });
}

/* SOUNDCLOUD */
$(document).ready(function() {
    var scid = $('#soundcloud');
	var widget = SC.Widget(document.getElementById('soundcloud_widget'));
	var is_playing = false;
	
	widget.bind(SC.Widget.Events.READY, function(){
		scPlaying();
	});
	
	function scPlaying(){
		if(is_playing == false){
			widget.play();
			is_playing = true;
			scid.toggleClass('musicPlaying musicPaused');
		} else {
			widget.pause();
			is_playing = false;
			scid.toggleClass('musicPlaying musicPaused');
		}
	}
	widget.bind(SC.Widget.Events.FINISH, function(){
		widget.play();
	});
	
    scid.on('click', function() {
		scPlaying();
    });
});

// Menu
$('#fireMenu').on('click', function(){
	$('#navigation').toggleClass('menuActive');
	if ($('#dark-pane').hasClass('hidden')){
		$('#dark-pane').removeClass('hidden');
		$('body').addClass('no-scroll');
	} else {
		$('#dark-pane').addClass('hidden');
		$('body').removeClass('no-scroll');
	}
});

$('#dark-pane').on('click', function(){
	$('#navigation').removeClass('menuActive');
	$('#dark-pane').addClass('hidden');
	$('body').removeClass('no-scroll');
});

$(document).ready(function() {
	if ($(window).width() > 1000) {
		setTimeout(function(){
			var wh2 = $('.welcome h2').height();
			$('.welcome h2').height(wh2+10)
			$(".welcome h2").scramble(1000, 10, "alphabet", true);
		},50);
	}
});

// Move body post images to actual Slider
function checkBullets(){
	// Add as many bullets as slides
	var giEl = document.querySelectorAll('#featured-gallery img').length;
	var bulletContainer = document.getElementById('slideBullets');
	var bulletEl = '<span class="slideBullet"></span>';
	for (var i = 0; i < giEl; i++) {
		bulletContainer.insertAdjacentHTML('beforeend', bulletEl);
	}
	jQuery('.slideBullet:first-child').addClass('currentBslider');
}

$(document).ready(function(){
    $('.targetProject').on('click', function(){
        $('#project-loader').addClass('slideContent');
		$('body').addClass('no-scroll');
		$("#project-loader").html('');
		
		if ($(this).data("project") === 'muffin') {
			$("#project-loader").load('./p/muffin.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'gdev') {
			$("#project-loader").load('./p/gdev.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'svvg') {
			$("#project-loader").load('./p/svvg.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'narrowai') {
			$("#project-loader").load('./p/narrowai.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'tedcss') {
			$("#project-loader").load('./p/tedcss.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'datzo') {
			$("#project-loader").load('./p/datzo.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		} else if ($(this).data("project") === 'baine') {
			$("#project-loader").load('./p/baine.html', function(responseTxt, statusTxt, xhr){
				checkBullets();
			});
		}
		
		// Resets Photo Slider
		slideIndex = 1;
		showDivs(slideIndex);
    });
});

$('body').on('click', '#st-close', function(){
	$('#project-loader').removeClass('slideContent');
	$('body').removeClass('no-scroll');
});

$('body').on('click', '#featured-gallery', function(){
	$('#lightBox').toggleClass('zoomSlider');
});

// ======================================================================= GDev Stuff 

$('#fireEmail').on('click', function(){
	$('.mail-container').addClass('show-mail');
});

$('.bottom-ball-fill, #closeEmail').on('click', function(){
	$('.mail-container').removeClass('show-mail');
});


// PHOTO SLIDER

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('lbSlide');
  var dots = document.getElementsByClassName('slideBullet');
  
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].classList.add('zoomOut');
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(' currentBslider', '');
  }
  x[slideIndex-1].classList.remove('zoomOut');
  dots[slideIndex-1].className += ' currentBslider';
  // Will error ClassName undefined because of dynamic content
}


// Slideshow buttons
var lbbleft = document.getElementById('slider-left');
var lbbright = document.getElementById('slider-right');

lbbleft.addEventListener('click', function(evento) {plusDivs(-1);});
lbbleft.addEventListener('click', function(evento) {plusDivs(1);});


