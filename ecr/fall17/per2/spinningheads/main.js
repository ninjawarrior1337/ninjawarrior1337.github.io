var heads;
var headsArray;

var animationTimer;
var scaredTimer;

var selectHead;
var randomTime;

function init() {
	heads = document.getElementsByClassName("heads");
	headsArray = Array.from(heads);

	headsArray.forEach(function (element) {
		element.setAttribute("scared", false);
	})

	headsArray.forEach(function (element) {
		element.style.backgroundPosition = "0px 0px";
	});

	var whispering = new Audio("whispering.mp3")
	whispering.volume = 0.8;
	whispering.play();

	whispering.addEventListener("ended", function () {
		this.currentTime = 0;
		this.play();
	})


	scared();

	animationTimer = setInterval(function () {
		var newX = parseInt(head00.style.backgroundPositionX);
		if (newX == +3200) {
			newX = 400;
		} else {
			newX += 400;
		}
		spin(newX);

		headsArray.forEach(function (element) {

		})

	}, 100);
}

function spin(nextVal) {
	headsArray.forEach(function (element) {
		if (element.getAttribute("scared") == "true") {
			element.style.backgroundPositionX = nextVal + "px";
			element.style.backgroundPositionY = -400 + "px";
		} else {
			element.style.backgroundPositionX = nextVal + "px";
			element.style.backgroundPositionY = 0 + "px";
		}

	}, this);
}

function scared() {

	scaredTimer = setTimeout(function () {
		selectHead = Math.floor(Math.random() * 6)

		randomTime = Math.floor(Math.random() * 2000 + 1000)
		if (headsArray[selectHead].getAttribute("scared") == "false") {
			if (selectHead % 2 == 0) {
				var manScream = new Audio("manScream.mp3");
				manScream.volume = 0.1;
				manScream.play();
			} else {
				var womanScream = new Audio("womanScream.mp3");
				womanScream.volume = 0.1;
				womanScream.play();
			}
		}
		headsArray[selectHead].setAttribute("scared", true);

		scared();

	}, randomTime)
}

function headClick(headId) {
	if (headId.getAttribute("scared") == "true") {
		new Audio("heartbeat.mp3").play();
		headId.setAttribute("scared", false);
	}
}