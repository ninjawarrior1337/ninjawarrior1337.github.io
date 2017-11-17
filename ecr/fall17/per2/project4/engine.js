var monkey0;
var gameTime;
var output;
var hitVal = 0;
var dedMonkeys = 0;
var livesVal = 5;

var winAudio = new Audio('complete.ogg');

function init(){
    monkey0 = document.getElementById("monkey0");
    output = document.getElementById("killed");
    lives = document.getElementById("lives");

    
    dedMonkeys = 0;
    hitVal = 0;

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
    if(dedMonkeys == 4)
    {
        lives.innerHTML = "Lives: 0";     
        setTimeout(function(){
            endGame(false);
        }, 50)
    }
    if(hitVal == 3)
    {
        output.innerHTML = "Score: 3";        
        setTimeout(function(){
            endGame(true);
        }, 50)
    }
}

function hitMonkey()
{
    hitVal++;
    output.innerHTML = "Score: " + hitVal;
    reloacate();
}

function loop(){
    y = parseInt(monkey0.style.top) - 1 - Math.pow(parseInt(hitVal), 3);
    if ( y < -100 )
        {
            monkey0.style.backgroundImage = "url('monkey.png')";                           
            reloacate();
            dedMonkeys++;
            livesVal -= 1;
            lives.innerHTML = "Lives: " + livesVal;
            console.log("Ded Monkeys: " + dedMonkeys);
            console.log("HitVal: " + hitVal);
        }
        else
        {
            monkey0.style.top = y + "px";
        }
}

function endGame(win)
{
    if(win)
    {
        winAudio.play();
        alert("You Win!");
        location.reload();
    }
    else
    {
        alert("You Loose M9 \n Total Score: " + hitVal);
        location.reload();
    }
}