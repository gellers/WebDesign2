function addWords() {
    var addWordsTo = document.getElementById("addWordsHere");
    var newP = document.createElement("p"); 
    
    newP.innerHTML = "HS"; 
    newP.addEventListener("mouseover", explain); 
    newP.addEventListener("mouseout", remove)
    addWordsTo.appendChild(newP); 
}
function explain() {
    this.innerHTML = "High School"; 
}
function remove() {
    this.innerHTML = "HS";
}