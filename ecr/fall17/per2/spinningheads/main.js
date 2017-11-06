var head00, head01, head02, head03, head04, head05;

var animationTimer;
var scaredTimer;

var selectHead;
var randomTime;

var head00x = 0;

var calm00, calm01, calm02, calm03, calm04, calm05;

function init() {
	head00 = document.getElementById("head00");
	head01 = document.getElementById("head01");
	head02 = document.getElementById("head02");
	head03 = document.getElementById("head03");
	head04 = document.getElementById("head04");
	head05 = document.getElementById("head05");	
	

	head00.style.backgroundPosition = "0px 0px";
	head01.style.backgroundPosition = "0px 0px";
	head02.style.backgroundPosition = "0px 0px";
	head03.style.backgroundPosition = "0px 0px";
	head04.style.backgroundPosition = "0px 0px";
	head05.style.backgroundPosition = "0px 0px";

	scared();

	animationTimer = setInterval(function () 
	{
		var newX = parseInt(head00.style.backgroundPositionX)
		if (newX == -3200) 
		{
			newX = -400;
		} 
		else 
		{
			newX += 400;
		}
		spin(newX);
	}, 100);
}

function scared()
{

	scaredTimer = setTimeout(function()
	{
		selectHead = Math.floor(Math.random()*6)
		randomTime = Math.floor(Math.random()*2000+1000)
		
		global[calm0+selectHead] = false;

		scared();

	}, randomTime)
}

function spin(nextVal) {
	if (calm00)
	{
		head00.style.backgroundPositionX = nextVal + "px";
		head00.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head00.style.backgroundPositionX = nextVal + "px";
		head00.style.backgroundPositionY = -400 + "px";
	}

	if (calm01)
	{
		head01.style.backgroundPositionX = nextVal + "px";
		head01.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head01.style.backgroundPositionX = nextVal + "px";
		head01.style.backgroundPositionY = -400 + "px";
	}

	if (calm02)
	{
		head02.style.backgroundPositionX = nextVal + "px";
		head02.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head02.style.backgroundPositionX = nextVal + "px";
		head02.style.backgroundPositionY = -400 + "px";
	}

	if (calm03)
	{
		head03.style.backgroundPositionX = nextVal + "px";
		head03.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head03.style.backgroundPositionX = nextVal + "px";
		head03.style.backgroundPositionY = -400 + "px";
	}

	if (calm04)
	{
		head04.style.backgroundPositionX = nextVal + "px";
		head04.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head04.style.backgroundPositionX = nextVal + "px";
		head04.style.backgroundPositionY = -400 + "px";
	}

	if (calm05)
	{
		head05.style.backgroundPositionX = nextVal + "px";
		head05.style.backgroundPositionY = 0 + "px";
	}
	else
	{
		head05.style.backgroundPositionX = nextVal + "px";
		head05.style.backgroundPositionY = -400 + "px";
	}
}

function headClick(headId) {
	if (headId == head00 && !calm00)
		calm00 = true;
	if (headId == head01 && !calm01)
		calm01 = true;
	if (headId == head02 && !calm02)
		calm02 = true;
	if (headId == head03 && !calm03)
		calm03 = true;
	if (headId == head04 && !calm04)
		calm04 = true;
	if (headId == head05 && !calm05)
		calm05 = true;
}





