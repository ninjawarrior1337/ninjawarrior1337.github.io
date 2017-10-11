numInequalities = 99999999999
var gameTimer;

function winGame()
{
    document.getElementById("btnToggleInequality").click();
    document.getElementById("btnFireInequality").click();
}

gameTimer = setInterval(winGame, 500)
