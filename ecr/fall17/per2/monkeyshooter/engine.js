var monkey0;
var gameTime;
var output;
var hitVal = 0;

function init(){
    monkey0 = document.getElementById("monkey0");
    output = document.getElementById("output");
    
    gameTime = setInterval(function(){
        loop();
    }, 10)

    output.innerHTML = "Score: " + hitVal;

    reloacate();
}

function reloacate(){
    var x = Math.floor(Math.random()*421)
    monkey0.style.left = x + "px";
    monkey0.style.top = "260px";
    y = 300;
}

function hitMonkey()
{
    hitVal++;
    output.innerHTML = "Score: " + hitVal;
    reloacate();
}

function loop(){
    var y = parseInt(monkey0.style.top) - 1 - hitVal;
    if ( y < -100 )
        {
            reloacate();
        }
        else
        {
            monkey0.style.top = y + "px";                
        }
}