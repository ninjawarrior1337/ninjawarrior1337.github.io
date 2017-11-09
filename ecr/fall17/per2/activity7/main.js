function init()
{
    $("body").hide();
    updateInfo("Walt");
    $("body").fadeIn(750);
}

function updateStats(name) {
    if (name == 'Walt') {
        $("#kills").html("Kills: 21");
        $("#hotness").html("Hotness: 7.8");
        $("#worth").html("Worth: $8.5B");
    }

    if (name == 'Jesse') {
        $("#kills").html("Kills: 10");
        $("#hotness").html("Hotness: 4.9");
        $("#worth").html("Worth: $1");
    }

    if (name == 'Hank') {
        $("#kills").html("Kills: 4");
        $("#hotness").html("Hotness: 2.1");
        $("#worth").html("Worth: $10K");
    }
}

function changeColor(name) {
    if (name == 'Walt') {
        $("#Walt").css("color", "blue");
        $("#Jesse").css("color", "black");
        $("#Hank").css("color", "black");

        $("#title").css("color", "white");
    }

    if (name == 'Hank') {
        $("#Walt").css("color", "black");
        $("#Jesse").css("color", "black");
        $("#Hank").css("color", "blue");

        $("#title").css("color", "black");
    }

    if (name == 'Jesse') {
        $("#Walt").css("color", "black");
        $("#Jesse").css("color", "blue");
        $("#Hank").css("color", "black");

        $("#title").css("color", "white");
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
        $("#title").html(name);
        $("#imgActor").attr("src", name + ".jpg");
        $("#content").css("background-color", "navy");
        $("#stats").css("color", "aqua");
        changeColor(name);
        updateStats(name);
    }

    if (name == 'Jesse') {
        $("#title").html(name);
        $("#imgActor").attr("src", name + ".jpg");
        $("#content").css("background-color", "pink");
        $("#stats").css("color", "navy");
        changeColor(name);
        updateStats(name);
    }

    if (name == 'Hank') {
        $("#title").html(name);
        $("#imgActor").attr("src", name + ".jpg") ;
        $("#content").css("background-color", "lavender");
        $("#stats").css("color", "navy");
        changeColor(name);
        updateStats(name);
    }
}