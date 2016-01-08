

var h1 = document.getElementById("width");

window.onresize = function() {
	h1.innerHTML = window.innerWidth;
};
