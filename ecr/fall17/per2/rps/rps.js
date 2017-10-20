var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var selectionmade;

var computerChoice;
var playerChoice;

function init(){
	imgPlayer = document.getElementById("imgPlayer");
	btnRock = document.getElementById("btnRock");
	btnPaper = document.getElementById("btnPaper");
	btnScissors = document.getElementById("btnScissors");
	btnGo = document.getElementById("btnGo");
	deselectAll();
}
	
function deselectAll()
{
	btnPaper.style.backgroundColor = 'silver';
	btnRock.style.backgroundColor = 'silver';
	btnScissors.style.backgroundColor = 'silver';
	btnGo.style.visibility = 'hidden';
	playerChoice = null;
}

function select(choice)
{
	imgPlayer.src = 'images/' + choice + '.png';
	deselectAll();
	if(choice=='rock')
	{
		btnRock.style.backgroundColor = "#888";
		playerChoice = "rock";
	}
	else if(choice=="paper")
	{
		btnPaper.style.backgroundColor = "#888";
		playerChoice = "paper";
		
	}
	else if(choice=="scissors")
	{
		btnScissors.style.backgroundColor = '#888';
		playerChoice = "scissors";	
	}
	else
	{
		playerChoice = null;
	}

	btnGo.style.display = 'block';

	if (playerChoice != null)
	{
		btnGo.style.visibility = 'visible';
	}
}

function go()
{
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = document.getElementById('imgComputer');

	if(numChoice == 0) {
		computerChoice = 'rock';
		imgComputer.src = 'images/rock.png';
	}
	if(numChoice == 1){
		computerChoice = 'paper';
		imgComputer.src = 'images/rock.png';
	};
	if(numChoice == 2) {
		computerChoice = 'scissors';
		imgComputer.src = "images/rock.png";
};


}
