
document.addEventListener('DOMContentLoaded', function(e) {
	var learnM = document.getElementById('learn-aven');
	var videoImage1 = document.getElementById('video1');
	var videoImage2 = document.getElementById('video2');
	
	var ytMuffin = '<div class="yt-wrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/VWcZmEaufQ4?rel=0&hd=1&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
	var ytMuffin1 = '<div class="yt-wrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/VWcZmEaufQ4?rel=0&hd=1&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
	var ytMuffin2 = '<div class="yt-wrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/VWcZmEaufQ4?rel=0&hd=1&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

	learnM.addEventListener('click', function(){
		learnM.innerHTML = ytMuffin;
	});
	
	videoImage1.addEventListener('click', function(){
		learnM.innerHTML = ytMuffin1;
	});
	
	videoImage2.addEventListener('click', function(){
		learnM.innerHTML = ytMuffin2;
	});
});