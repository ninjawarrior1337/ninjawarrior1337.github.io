var catX;
var catY;
var dogX;
var dogY;

var endlessCheck;

cat =  document.getElementById("cat");
dog = document.getElementById("dog");

randomize = document.getElementById("endless");

window.setInterval(function() {checkIfChecked();}, 0);

function checkIfChecked()
{
    if (randomize.checked) 
    {
        if (endlessCheck) {
            clearInterval(endlessCheck);
        }
        endlessCheck = setInterval(function(){ move(); }, 0);
        console.log(true);
    }
    else
    {
        clearInterval(endlessCheck);
        console.log(false);
    }
}

function setCatCoord(catX, catY)
{
    cat.style.left = catX + "px";
    cat.style.top = catY + "px";
}

function setDogCoord(dogX, dogY)
{
    dog.style.left = dogX + "px";
    dog.style.top = dogY + "px";
}

function move()
{
    catX = Math.floor(Math.random()*401);
    catY = Math.floor(Math.random()*270);
    dogX = Math.floor(Math.random()*411);
    dogY = Math.floor(Math.random()*270);

    dog.style.width = Math.floor(Math.random()*401)

    setCatCoord(catX, catY);
    setDogCoord(dogX, dogY);
}

