cheet('up up down down left right left right b a', function () { 
    var vertdnag = document.getElementsByClassName("lelsame")
    
    if (vertdnag.item(0).getAttribute("id") == "a")
    {
        vertdnag.item(0).setAttribute("id", "rainbow")
    }
    else
    {
        vertdnag.item(0).setAttribute("id", "a")
    }
    
    
});
