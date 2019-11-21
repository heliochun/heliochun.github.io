
window.onload	= function() {myFunction()};
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById('topBar');
var bodyContainer = document.querySelector('.body-container');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
		bodyContainer.classList.add('bodyTopSpacer');
	} else {
		header.classList.remove('sticky');
		bodyContainer.classList.remove('bodyTopSpacer');
	}
}