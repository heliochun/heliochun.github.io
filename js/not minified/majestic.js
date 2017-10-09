var proLi = $('.project-list li');

proLi.on('click', function() {
	var plAnch = $("#" + $(this).attr("data-anchor")),
	domTarget = $("html,body");
	domTargetOffset = plAnch.offset().top
	domTarget.animate({scrollTop: domTargetOffset});
});

(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
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
      });
    }
  });
})();
console.clear();

/* ---- particles.js config ---- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
	  "limit": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#69b3bc" // #dffffe
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#2c6166", // #94e1e7
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Show more info
var fireSkills = document.getElementById('fire-skills');
var skillsEl = document.getElementById('skills');

fireSkills.addEventListener('click', function(){
	if (skillsEl.getAttribute('class') == 'show') {
		skillsEl.setAttribute('class', 'show-invert');
	} else {
		skillsEl.setAttribute('class', 'show');
	}
});

// Screenshot generator
var x = document.querySelectorAll('.trigger-screenshot');
var screenshots = document.getElementById('screenshots');
var lightBox = document.getElementById('lightBox');

for (var i=0; i<x.length; i++ ){
    link = x[i];
    link.addEventListener('click', function(evento) {
        if (evento.target.id == 'datzo-screenshots') {
            screenshots.innerHTML = '\
				<img class="lbSlide" src="images/screenshots/datzo/1.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/datzo/2.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/datzo/3.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/datzo/4.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/datzo/5.jpg"/>\
			';
			lightBox.classList.remove('hidden');
			lightBox.classList.add('show');
        } else if (evento.target.id == 'baine-screenshots'){
            screenshots.innerHTML = '\
				<img class="lbSlide" src="images/screenshots/baine/1.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/baine/2.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/baine/3.jpg"/>\
				<img class="lbSlide display-none" src="images/screenshots/baine/4.jpg"/>\
			';
			lightBox.classList.remove('hidden');
			lightBox.classList.add('show');
        } else if (evento.target.id == 'el-dois') {
            screenshots.innerHTML = '<span class="conteudo-screenshots">Conteúdo do elemento DOIS</span>';
        } else if (evento.target.id == 'close-lb') {
            screenshots.innerHTML = '';
			lightBox.classList.add('hidden');
			lightBox.classList.remove('show');
        }
    });
}

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("lbSlide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].classList.add('display-none');
  }
  x[slideIndex-1].classList.remove('display-none');
}

// Slideshow buttons
var lbbleft = document.getElementById('lb-button-left');
var lbbright = document.getElementById('lb-button-right');

lbbleft.addEventListener('click', function(evento) {plusDivs(-1);});
lbbleft.addEventListener('click', function(evento) {plusDivs(1);});