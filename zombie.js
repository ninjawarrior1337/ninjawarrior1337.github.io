function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

for (var i = 0; i < 10; i++)
{
    document.getElementById("btnToggleInequality").click();
    document.getElementById("btnFireInequality").click();
}
