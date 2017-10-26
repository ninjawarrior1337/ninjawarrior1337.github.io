function getEId(str) {
    return document.getElementById(str)
}

var title = document.getElementById("title");

var imgActor = document.getElementById("imgActor");

var content = document.getElementById("content");

var jb = document.getElementById("Jesse");
var hb = getEId("Hank");
var wb = getEId("Walt");

var stats = document.getElementById("stats");
var kills = document.getElementById("kills");
var hotness = document.getElementById("hotness");
var worth = document.getElementById("worth");

function updateStats(name) {
    if (name == 'Walt') {
        kills.innerHTML = "Kills: 21";
        hotness.innerHTML = "Hotness: 7.8";
        worth.innerHTML = "Worth: $8.5B"
    }

    if (name == 'Jesse') {
        kills.innerHTML = "Kills: 10";
        hotness.innerHTML = "Hotness: 4.9";
        worth.innerHTML = "Worth: $1";
    }

    if (name == 'Hank') {
        kills.innerHTML = "Kills: 4";
        hotness.innerHTML = "Hotness: 2.1";
        worth.innerHTML = "Worth: $10K"
    }
}

function changeColor(name) {
    if (name == 'Walt') {
        wb.style.color = "blue"
        jb.style.color = null;
        hb.style.color = null;

        title.style.color = "white";
    }

    if (name == 'Hank') {
        wb.style.color = null;
        jb.style.color = null;
        hb.style.color = "blue";

        title.style.color = "black";
    }

    if (name == 'Jesse') {
        wb.style.color = null;
        jb.style.color = "blue";
        hb.style.color = null;

        title.style.color = "white";
    }
}

// function getHotness()
// {
//     var val = Math.floor(Math.random()*11);
//     if(val <= 0)
//     {
//         return "Hotness: " + parseInt(val+1) + ".0";
//     }
//     else
//     {
//         return "Hotness: " + val + ".0";
//     }
// }

function updateInfo(name) {
    if (name == 'Walt') {
        title.innerHTML = "Walt";
        imgActor.src = name + ".jpg";
        content.style.backgroundColor = "navy";
        stats.style.color = "aqua";
        changeColor(name);
        updateStats(name);
    }

    if (name == 'Jesse') {
        title.innerHTML = "Jesse";
        imgActor.src = name + ".jpg";
        content.style.backgroundColor = "pink";
        stats.style.color = "navy";
        changeColor(name);
        updateStats(name);
    }

    if (name == 'Hank') {
        title.innerHTML = name;
        imgActor.src = name + ".jpg";
        content.style.backgroundColor = "lavender";
        stats.style.color = "navy";
        changeColor(name);
        updateStats(name);
    }
}