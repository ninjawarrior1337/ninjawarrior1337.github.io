var head00;

var timer;
var scaredTimer;

var head00x = 0;
var calm = true;

function init() {
	head00 = document.getElementById("head00");

	head00.style.backgroundPosition = "0px 0px";

	timer = setInterval(function () {
		if (head00x == -3200) 
		{
			head00x = -400;
		} 
		else 
		{
			head00x += 400;
		}
		moveBackground(head00x);
	}, 100);

	scaredTimer = setTimeout(function(){
		calm = false;
	}, 3000)
}

function moveBackground(nextVal) {
	if (calm)
		head00.style.backgroundPosition = nextVal + "px " + 0 + "px";
	else
		head00.style.backgroundPosition = nextVal + "px " + -400 + "px";

	// console.log(nextVal);
}

function headClick() {
	if (!calm)
		calm = true;
}