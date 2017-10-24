var title = document.getElementById("title");

var imgActor = document.getElementById("imgActor");

var content = document.getElementById("content");

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
        worth.innerHTML = "Worth: $10B"
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
        updateStats(name);
    }
    
    if (name == 'jesse')
    {
        title.innerHTML = "Jesse";
        imgActor.src = "jesse.jpg";
        content.style.backgroundColor = "pink";
        stats.style.color = "navy";
        updateStats(name);
    }
}