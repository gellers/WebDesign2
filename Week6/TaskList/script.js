function addTask() {
    var taskInfo = document.getElementById("taskInfo");
    //input value
    var taskInfoValue = taskInfo.value;
    //div to add task info to 
    var divAddTask = document.getElementById("task");
    //create new div
    var newTask = document.createElement("div"); 
    
    newTask.innerHTML = taskInfoValue; 
    divAddTask.appendChild(newTask); 
}   