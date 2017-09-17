var fireNav = document.getElementById('fire-nav');
var mbInit = document.getElementById('menu-bar-init');
var nav = document.getElementById('navigation');

/* Menu */
function toggleMenu() {
    var menu = fireNav;

    if ( (" " + menu.className + " ").replace(/[\n\t]/g, " ").indexOf('menu-open') > -1 ) {
        menu.classList.add('menu-close');
		mbInit.classList.remove('menu-bar-fill');
        setTimeout(function(){
            menu.classList.remove('menu-open','menu-close');
        }, 500);
    } else {
        menu.classList.add('menu-open');
		mbInit.classList.add('menu-bar-fill');
    }
	nav.classList.toggle('show-nav');
}

fireNav.addEventListener('click', function(){
    toggleMenu();
});

var bioShowMore = document.getElementById('show-more-icon');
var bioMoreWrap = document.getElementById('profile-bio-wrapper');

if (typeof(bioShowMore) != 'undefined' && bioShowMore != null){
	bioShowMore.addEventListener('click', function(){
		bioMoreWrap.classList.toggle('show-more-info');
	});
}

/* Material Design */
document.addEventListener('DOMContentLoaded', function(e) {
	
[].slice.call(window.document.querySelectorAll('.paper-button, .image-card')).forEach(function(el) {
	el.PaperRipple = new PaperRipple();
	el.appendChild(el.PaperRipple.$);

	if (el.classList.contains('paper-button--fab') || el.classList.contains('paper-button--fab-mini') || el.classList.contains('paper-button--icon')) {
		el.PaperRipple.$.classList.add('paper-ripple--round');
		el.PaperRipple.recenters = true;
		el.PaperRipple.center = el.classList.contains('paper-button--icon');
	}

	el.addEventListener('mousedown', function(ev) {
		this.PaperRipple.downAction(ev);
	});

	el.addEventListener('mouseup', function() {
		this.PaperRipple.upAction();
	});
});

});