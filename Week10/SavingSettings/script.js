function saveInputs() {
    saveUser(); 
    saveSettings(); 
}
function saveSettings(){
    //this should be the value of the child node that is selected
    let backgroundColor = document.getElementById("selBackground"); 
    let jsonColor = JSON.stringify("color", backgroundColor); 
    localStorage.setItem("color", jsonColor); 

    applySettings();
}
function applySettings(){
    let color = localStorage.getItem("color"); 
    //test
    console.log("color: " + color)
    var circles = document.getElementsByClassName("content");
    //also not working
    for(var circle of circles){
        circle.style.backgroundColor = color;
    }
}
function saveUser() {
    let txtUser = document.getElementById("txtUser"); 
    localStorage.setItem("user", JSON.stringify(txtUser.value));  
    //test
    console.log("user: " + localStorage.getItem("user"));

     applyUser();
}
function applyUser() {
    let header = document.getElementById("header"); 
    //not working for some reason?
    let user = localStorage.getItem("user").parse; 
    
    if (user === undefined || user === null) {
        user = '[user]'; 
    }
    header.innerHTML = 'Saving Settings--Hello ' + user; 
}