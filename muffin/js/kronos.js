
document.addEventListener('DOMContentLoaded', function(e) {
	var learnM = document.getElementById('learn-muffin');
	var ytMuffin = '<div class="yt-rapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/szKzz60srDQ?rel=0&hd=1&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

	learnM.addEventListener('click', function(){
		learnM.innerHTML = ytMuffin;
	});
});