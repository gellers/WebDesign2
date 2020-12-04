"use strict"
let toDoList = [];
let inProgressList = [];
let testingList = []; 
let doneList = [];

window.onload = function() {
  retrieveToDoList();
  retreiveInProgressList();
  retrieveTestingList();
  retrieveDoneList();
}; 

///create new element that goes to "to do" when add button is clicked
function createTask() {
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
    newTaskDiv.setAttribute("data-stage", "to-do"); 
    newTaskDiv.setAttribute("data-i", toDoList.length);
    newTaskDiv.innerHTML = taskValue.value;  
    newTaskDiv.id = "task" + toDoList.length;   
    toDoDisplay.appendChild(newTaskDiv); 
    toDoList.push(taskValue.value);
    //to make sure stuff is saved for next time loading page
    pushToStorage(); 
}

//function to save to localstorage
function pushToStorage() {
    var jsonToDoList = JSON.stringify(toDoList); 
    localStorage.setItem("toDoList", jsonToDoList); 
    var jsonInProgressList = JSON.stringify(inProgressList); 
    localStorage.setItem("inProgressList", jsonInProgressList); 
    var jsonTestingList = JSON.stringify(testingList); 
    localStorage.setItem("testingList", jsonTestingList);
    var jsonDoneList = JSON.stringify(doneList); 
    localStorage.setItem("doneList", jsonDoneList);
}
//get todo list from local storage; retrieveToDoList
function retrieveToDoList() {
    var jsonToDoList = localStorage.getItem("toDoList"); 
    if (jsonToDoList !== null) {
      var list = JSON.parse(jsonToDoList); 
      for (let i = 0; i < list.length; i++) {
        let newTaskDiv = document.createElement("div"); 
        //get element where to do is displayed
        let toDoDisplay = document.getElementById("to-do"); 
        newTaskDiv.classList.add("new-div");
        //to make dragable
        newTaskDiv.setAttribute("draggable", "true"); 
        newTaskDiv.setAttribute("ondragstart", "drag(event);");
        newTaskDiv.setAttribute("data-stage", "to-do");
        newTaskDiv.setAttribute("data-i", i);
        newTaskDiv.innerHTML = list[i];   
        newTaskDiv.id = "task" + list[i];   
        toDoDisplay.appendChild(newTaskDiv); 
        toDoList.push(list[i]);
      }
    }
}
//create retrieval functions for rest of them too, but only make them fire if there is data stored in them
function retreiveInProgressList() {
  var jsonInProgressList = localStorage.getItem("inProgressList"); 
  if (jsonInProgressList !== null) {
    var list = JSON.parse(jsonInProgressList); 
    for (var i = 0; i < list.length; i++) {
      var newTaskDiv = document.createElement("div"); 
      //get element whre to do is displayed
      let inProgressDisplay = document.getElementById("in-progress"); 
      newTaskDiv.classList.add("new-div");
      newTaskDiv.setAttribute("draggable", "true"); 
      newTaskDiv.setAttribute("ondragstart", "drag(event);");
      newTaskDiv.setAttribute("data-stage", "in-progress");
      newTaskDiv.setAttribute("data-i", i);
      newTaskDiv.innerHTML = list[i]; 
      newTaskDiv.id = "task" + list[i]; 
      inProgressDisplay.appendChild(newTaskDiv); 
      inProgressList.push(list[i]); 
    }
  }
}
function retrieveTestingList() {
  var jsonTestingList = localStorage.getItem("testingList"); 
  if (jsonTestingList !== null) {
    var list = JSON.parse(jsonTestingList); 
    for (var i = 0; i < list.length; i++) {
      let newTaskDiv = document.createElement("div"); 
      let testingDisplay = document.getElementById("testing"); 
      newTaskDiv.classList.add("new-div");
      newTaskDiv.setAttribute("draggable", "true"); 
      newTaskDiv.setAttribute("ondragstart", "drag(event);");
      newTaskDiv.setAttribute("data-stage", "testing");
      newTaskDiv.setAttribute("data-i", i);
      newTaskDiv.innerHTML = list[i]; 
      testingDisplay.appendChild(newTaskDiv); 
      testingList.push(list[i]); 
    } 
  }
}
function retrieveDoneList() {
  var jsonDoneList = localStorage.getItem("doneList"); 
  if (jsonDoneList !== null) {
    var list = JSON.parse(jsonDoneList); 
    for (var i = 0; i < list.length; i++) {
      let newTaskDiv = document.createElement("div"); 
      let doneDisplay = document.getElementById("done"); 
      newTaskDiv.classList.add("new-div");
      newTaskDiv.setAttribute("draggable", "true"); 
      newTaskDiv.setAttribute("ondragstart", "drag(event);");
      newTaskDiv.setAttribute("data-stage", "done"); 
      newTaskDiv.setAttribute("data-i", i);
      newTaskDiv.innerHTML = list[i]; 
      doneDisplay.appendChild(newTaskDiv); 
      doneList.push(list[i]);
    }
  }
}
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
    //splice it out of the old array
    //push it onto the new array
    var oldStage = el.getAttribute("data-stage"); 
    el.setAttribute("data-stage", dropTarget.id); 
    let currentStage = el.getAttribute("data-stage"); 

    //to remove from where stuff stored previously
    if (oldStage === "to-do") {
      toDoList.splice(el.getAttribute("data-i"), 1); 
    } else if (oldStage === "in-progress") {
      inProgressList.splice(el.getAttribute("data-i"), 1);
    } else if (oldStage === "testing") {
      testingList.splice(el.getAttribute("data-i"), 1); 
    } else if (oldStage === "done") {
      doneList.splice(el.getAttribute("data-i"), 1); 
    }

    //could make to switch statement
    if (currentStage === "to-do") {
      el.setAttribute("data-i", toDoList.length); 
      toDoList.push(el.innerHTML); 
    } else if (currentStage === "in-progress") {
      el.setAttribute("data-i", inProgressList.length); 
      inProgressList.push(el.innerHTML); 
    } else if (currentStage === "testing") {
      el.setAttribute("data-i", testingList.length); 
      testingList.push(el.innerHTML); 
    } else if (currentStage === "done") {
      el.setAttribute("data-i", doneList.length); 
      doneList.push(el.innerHTML); 
    }
    //see what else needs to change to be able to save all the stuff that can be changed here
    pushToStorage(); 
}