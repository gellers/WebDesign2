function saveSettings(){
    //here you need to save the saveSettings
    //I have called applySettings() for you.
    applySettings();
}
function applySettings(){
    var circles = document.getElementsByClassName("content");
    for(var circle of circles){
        //this loops through everything with a class of 'content' and you will apply the settings to each.
        circle.style.boxShadow = "2px 2px grey";
    }
}
//Remember, too, to create the functionality to retrieve settings.