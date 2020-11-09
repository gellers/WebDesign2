"use strict"
var list = []; 
var jsonList; 


window.onload = function() {
    retreiveData(); 
}

function retreiveData() {
    jsonList = localStorage.getItem("list");
    if(jsonList !== null) {
        list = JSON.parse(jsonList); 
        for (let i = 0; i < list.length; i++) {
            let newEl = document.createElement("div");
            let taskMain = document.getElementById("task"); 
            newEl.innerHTML = list[i];
            newEl.dataset.i = i; 
            newEl.addEventListener("click", deleteTask); 
            taskMain.appendChild(newEl); 
        }
    }
}
function addTask() {  
    let taskValue = document.getElementById("taskInfo").value; 
    let newEl = document.createElement("div");
    let taskMain = document.getElementById("task"); 
    newEl.innerHTML = taskValue; 
    newEl.addEventListener("click", deleteTask); 

    taskMain.appendChild(newEl); 

    list.push(taskValue); 
    jsonList = JSON.stringify(list); 
    localStorage.setItem("list", jsonList);
}
function deleteTask() {
    list.splice(this.dataset.i, 1);
    this.remove(); 
}
//saves them to list and local storage
function saveTasks(element) {
    
}
