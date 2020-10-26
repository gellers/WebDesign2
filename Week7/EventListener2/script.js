function addElement() {
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("box"); 

    newDiv.addEventListener("click", setText);
    var container = document.getElementById("container");
    container.appendChild(newDiv); 

}
function setText() {
    this.innerHTML = "This is this!"; 
}