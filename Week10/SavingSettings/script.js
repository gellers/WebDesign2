window.onload = function() {
    saveInputs(); 
  }; 
  function saveInputs() {
      saveUser(); 
      saveSettings(); 
  }
  function saveSettings(){
      let backgroundColor = document.getElementById("selBackground").value; 
      localStorage.setItem("color", backgroundColor); 
      
      applySettings();
  }
  function applySettings(){
      let color = localStorage.getItem("color"); 
      
      var circles = document.getElementsByClassName("content");
      for(var circle of circles){
          circle.style.backgroundColor = color;
      }
  }
  function saveUser() {
      let txtUser = document.getElementById("txtUser").value; 
      localStorage.setItem("user", txtUser);  
  
       applyUser();
  }
  function applyUser() {
      let header = document.getElementById("header"); 
      let user = localStorage.getItem("user"); 
      
      if (user === null) {
          user = '[user]'; 
      }
      header.innerHTML = 'Saving Settings--Hello ' + user; 
  }