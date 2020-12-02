"use strict"

let toDoList = [];
let inProgressList = [];
let testingList = []; 
let doneList = [];

let allList = []; 

//let fullList = {}; 

window.onload = function() {
    retrieveToDoList();
    //something like below in here
    /*
  retrieveInPList();
  retrieveTestList();
  retrieveDoneList();
    */
}; 

function createTask() {
    ///create new element that goes to "to do" when add button is clicked

    //makes more intuitive sense than task name 'cause that's not really what it is, I guess?
    let taskValue = document.getElementById("new-task"); 
    let newTaskDiv = document.createElement("div"); 
    //get element whre to do is displayed
    let toDoDisplay = document.getElementById("to-do"); 
    newTaskDiv.classList.add("new-div");
    //to make dragable
    newTaskDiv.setAttribute("draggable", "true"); 
    newTaskDiv.setAttribute("ondragstart", "drag(event);");
    //set attribute which tracks where the thing is; stage as in how done somthing is
    newTaskDiv.setAttribute("data-stage", toDoDisplay.id); 
    newTaskDiv.innerHTML = taskValue.value;  
    newTaskDiv.id = "task" + toDoList.length;   
    toDoDisplay.appendChild(newTaskDiv); 
    toDoList.push(taskValue.value);
    //to make sure stuff is saved for next time loading page
    pushToStorage(); 
}

//function to save to localstorage
function pushToStorage() {
    let jsonToDoList = JSON.stringify(toDoList); 
    localStorage.setItem("toDoList", jsonToDoList); 
}

//get todo list from local storage
function retrieveToDoList() {
    let jsonToDoList = localStorage.getItem("toDoList"); 
    if (jsonToDoList !== null) {
      let list = JSON.parse(jsonToDoList); 
      for (let i = 0; i < list.length; i++) {
        let newTaskDiv = document.createElement("div"); 
        //get element whre to do is displayed
        let toDoDisplay = document.getElementById("to-do"); 
        newTaskDiv.classList.add("new-div");
        //to make dragable
        newTaskDiv.setAttribute("draggable", "true"); 
        newTaskDiv.setAttribute("ondragstart", "drag(event);");
        newTaskDiv.innerHTML = list[i];   
        newTaskDiv.id = "task" + toDoList.length;   
        toDoDisplay.appendChild(newTaskDiv); 
        toDoList.push(list[i]);
      }
    }
}
//create retrieval functions for rest of them too, but only make them fire if there is data stored in them

function allowDrop(e) {
    e.preventDefault(); 
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id); 
}

function drop(e) {

    e.preventDefault();
    var el = document.getElementById(e.dataTransfer.getData("text"));
    var dropTarget = e.target; 
    while(!dropTarget.classList.contains("tasks")) {
        dropTarget = dropTarget.parentElement; 
    }
    dropTarget.appendChild(el);
    el.setAttribute("data-stage", dropTarget.id); 
}

//to store the elements based on which stage they're in and store in different lists
//coulld maybe make to object, if time
function storeLists() {

}