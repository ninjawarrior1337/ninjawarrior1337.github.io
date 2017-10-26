var monkey0;
var gameTime;
var output;
var hitVal = 0;
var dedMonkeys = 0;

function init(){
    monkey0 = document.getElementById("monkey0");
    output = document.getElementById("output");
    
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
    monkey0.style.background = "url('monkey.png')";    
    if(dedMonkeys == 4)
    {
        endGame(false);
    }
    if(hitVal == 3)
    {
        endGame(true)
    }
}

function hitMonkey()
{
    hitVal++;
    output.innerHTML = "Score: " + hitVal;
    monkey0.style.background = "url('explode.gif')";
    reloacate();
}

function loop(){
    y = parseInt(monkey0.style.top) - 1 - Math.pow(parseInt(hitVal), 2);
    if ( y < -100 )
        {
            reloacate();
            dedMonkeys++;
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
        alert("You Win!");
        location.reload();
    }
    else
    {
        alert("You Loose M9 \n Total Score: " + hitVal);
        location.reload();
    }
}