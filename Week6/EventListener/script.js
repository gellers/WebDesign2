"use strict"
//make some event listener and remove some elements
function addElement() {
    var newDiv = document.createElement("div"); 
    newDiv.classList.add("box");
    var container = document.getElementById("container");
    container.appendChild(newDiv); 
}

function setText() {
    this.innnerHTML = "This is: ";
}