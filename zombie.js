function toggle() {
    document.getElementById("btnToggleInequality").click();
}

function fire() {
    hittestInequality();
}

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        toggle();
    }, 1000);
    setTimeout(function() {
        fire();
    }, 3000);
}