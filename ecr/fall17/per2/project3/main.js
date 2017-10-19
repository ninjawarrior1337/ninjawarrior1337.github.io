var more = document.getElementById("more");

var windwidth = $( "#wrapper" ).width();
var windheight = $( "#wrapper" ).height();

var buttonX;
var buttonY;

function move()
{
    windwidth = $( "#wrapper" ).width();
    windheight = $( "#wrapper" ).height();

    buttonX = Math.floor(Math.random()*windwidth);
    buttonY = Math.floor(Math.random()*windheight);

    more.style.marginLeft = buttonX + "px";
    more.style.marginTop = buttonY + "px";
}

// setInterval(function(){
//     move();
// }, 100)