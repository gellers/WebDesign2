"use strict"
window.onload = function() {
    
    let container = document.getElementById("container");
    container.innerHTML = "abc";
}
var divCount = 0;
function add() {
    let container = document.getElementById("container");
    var n = document.createElement("div");
    divCount++;
    n.innerHTML = divCount;
    n.addEventListener("click", remove);
    container.appendChild(n);
}
function remove() {
    this.parentElement.removeChild(this); 
}