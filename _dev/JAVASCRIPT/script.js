(function(w){
	
	var container = document.getElementById('main-page');
		container.setAttribute("style", "height:" + w.innerHeight + "px");

	var letter = document.getElementById('center');
	letter.setAttribute("style", "margin-top:" + ((w.innerHeight/2) - 200) + "px");

	var a = window.addEventListener("resize",function(){
		letter = document.getElementById('center');
		
		var height = w.innerHeight;
		
		container.setAttribute("style", "height:" + height + "px");
		letter.setAttribute("style", "margin-top:" + ((height/2) - 200) + "px");

	},false);

})(window);

