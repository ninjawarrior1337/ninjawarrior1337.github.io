function getEId(str)
{
    return document.getElementById(str)
}

var title = document.getElementById("title");

var imgActor = document.getElementById("imgActor");

var content = document.getElementById("content");

var jb = document.getElementById("jesse");
var hb = getEId("hank");
var wb = getEId("walt");

var stats = document.getElementById("stats");
var kills = document.getElementById("kills");
var hotness = document.getElementById("hotness");
var worth = document.getElementById("worth");

function updateStats(name)
{
    if (name == 'walt')
    {
        kills.innerHTML = "Kills: 21";
        hotness.innerHTML = "Hotness: 7.8";
        worth.innerHTML = "Worth: $8.5B"
    }
    
    if (name == 'jesse')
    {
        kills.innerHTML = "Kills: 10";
        hotness.innerHTML = "Hotness: 8.9";
        worth.innerHTML = "Worth: $1";
    }

    if (name == 'hank')
    {
        kills.innerHTML = "Kills: 4";
        hotness.innerHTML = "Hotness: 3.0";
        worth.innerHTML = "Worth: $10K"
    }
}

function changeColor(name)
{
    if(name == 'walt')
    {
        wb.style.color = "blue"
        jb.style.color = null;
        hb.style.color = null;
        
        title.style.color = "white";
    }

    if(name == 'hank')
    {
        wb.style.color = null;
        jb.style.color = null;
        hb.style.color = "blue";

        title.style.color = "black";        
    }

    if(name == 'jesse')
    {
        wb.style.color = null;
        jb.style.color = "blue";
        hb.style.color = null;

        title.style.color = "white";        
    }
}

function updateInfo(name)
{
    if (name == 'walt')
    {
        title.innerHTML = "Walt";
        imgActor.src = "walt.jpg";
        content.style.backgroundColor = "navy";
        stats.style.color = "aqua";
        changeColor(name);
        updateStats(name);
    }
    
    if (name == 'jesse')
    {
        title.innerHTML = "Jesse";
        imgActor.src = "jesse.jpg";
        content.style.backgroundColor = "pink";
        stats.style.color = "navy";
        changeColor(name);
        updateStats(name);
    }

    if (name == 'hank')
    {
        title.innerHTML = "Hank";
        imgActor.src = "hank.jpg";
        content.style.backgroundColor = "lavender";
        stats.style.color = "navy";
        changeColor(name);
        updateStats(name);
    }
}