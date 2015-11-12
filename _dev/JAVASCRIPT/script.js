(function(w) {
	
	var container,paralax,letter,resize;

		container = document.getElementById('main-page');
		paralax = document.querySelector('.paralax');
		letter = document.getElementById('center');

		container.style.height = w.innerHeight + "px";
		paralax.style.height = w.innerHeight + "px";
		letter.style.marginTop = ((w.innerHeight/2) - 200) + "px";

	resize = window.addEventListener("resize",function(){

		var height = w.innerHeight;
		
		container.style.height = height + "px";
		paralax.style.height = height + "px";
		letter.style.marginTop = (( height/2 ) - 200) + "px";

	},false);

})(window);

