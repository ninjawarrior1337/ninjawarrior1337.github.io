var heads;
var headsArray;

var animationTimer;
var scaredTimer;

var selectHead;
var randomTime;

function init() {
	heads = document.getElementsByClassName("heads");
	headsArray = Array.from(heads);

	headsArray.forEach(function(element){
		element.setAttribute("scared", false);
	})

	headsArray.forEach(function (element) {
		element.style.backgroundPosition = "0px 0px";
	});

	scared();

	animationTimer = setInterval(function () 
	{
		var newX = parseInt(head00.style.backgroundPositionX);
		if (newX == +3200) 
		{
			newX = 400;
		} 
		else 
		{
			newX += 400;
		}
		spin(newX);

		headsArray.forEach(function (element) 
		{
			
		})

	}, 100);
}

function spin(nextVal) {

	headsArray.forEach(function (element) 
	{
		if (element.getAttribute("scared") == "true") 
		{
			element.style.backgroundPositionX = nextVal + "px";
			element.style.backgroundPositionY = -400 + "px";
		} 
		else 
		{
			element.style.backgroundPositionX = nextVal + "px";
			element.style.backgroundPositionY = 0 + "px";
		}

	}, this);
}

function scared() {

	scaredTimer = setTimeout(function () {
		selectHead = Math.floor(Math.random() * 6)
		randomTime = Math.floor(Math.random() * 2000 + 1000)

		headsArray[selectHead].setAttribute("scared", true);

		scared();

	}, randomTime)
}

function headClick(headId) {
	if (headId.getAttribute("scared") == "true")
		headId.setAttribute("scared", false);
}