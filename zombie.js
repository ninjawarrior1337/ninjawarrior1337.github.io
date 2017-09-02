function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function toggle()
{
    document.getElementById("btnToggleInequality").click();
}

function fire()
{
    document.getElementById("btnFireInequality").click();
}

for (var i = 0; i < 10; i++)
{
    setTimeout(function() { toggle(); }, 1000);
    setTimeout(function() { fire(); }, 3000);
}
