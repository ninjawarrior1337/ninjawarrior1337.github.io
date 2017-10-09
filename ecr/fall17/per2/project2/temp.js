var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var h1 = document.getElementById("size");

h1.innerHTML = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var lastVal  = h1.innerHTML;