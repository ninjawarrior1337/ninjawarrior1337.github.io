var title = $('#title');

var imgActor = $("#imgActor");

var content = $("#content");

var jb = $("#Jesse");
var hb = $("#Hank");
var wb = $("#Walt");

var stats = $("#stats");
var kills = $("#kills");
var hotness = $("#hotness");
var worth = $("#worth");

function updateStats(name) {
    if (name == 'Walt') {
        kills.html("Kills: 21");
        hotness.html("Hotness: 7.8");
        worth.html("Worth: $8.5B");
    }

    if (name == 'Jesse') {
        kills.html("Kills: 10");
        hotness.html("Hotness: 4.9");
        worth.html("Worth: $1");
    }

    if (name == 'Hank') {
        kills.html("Kills: 4");
        hotness.html("Hotness: 2.1");
        worth.html("Worth: $10K");
    }
}

function changeColor(name) {
    if (name == 'Walt') {
        wb.css("color", "blue");
        jb.css("color", null);
        hb.css("color", null);

        title.css("color", "white");
    }

    if (name == 'Hank') {
        wb.css("color", null);
        jb.css("color", null);
        hb.css("color", "blue");

        title.style.color = "black";
    }

    if (name == 'Jesse') {
        wb.css("color", null);
        jb.css("color", "blue");
        hb.css("color", null);

        title.css("color", "white");
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
        title.html(name);
        imgActor.attr("src", name + ".jpg");
        content.css("background-color", "navy");
        stats.css("color", "aqua");
        changeColor(name);
        updateStats(name);
    }

    if (name == 'Jesse') {
        title.innerHTML = "Jesse";
        imgActor.src = name + ".jpg";
        content.css("background-color", "pink");
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