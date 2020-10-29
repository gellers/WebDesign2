var responses = ["Decidely so", "Most certainly not", "Certainly", "Of course", 
    "Why not?", "Don’t count on it","Cannot tell you now", "Outlook not so good"];

function displayList() {
    let container = document.getElementById("container"); 
    let ls = document.createElement("ul")
    for (let i = 0; i < responses.length; i++) {
        let li = document.createElement("li"); 
        li.innerHTML = responses[i];
        ls.appendChild(li); 
        ls.addEventListener("click", removeDisplayList);
    }
    container.appendChild(ls); 
}
function removeDisplayList() {
    this.remove(); 
}
//adds random answer to answer div onclick
function giveAnswer() {
    let randNum = Math.trunc(Math.random() * responses.length); 
    let answer = document.getElementById("answer"); 
    let createdAnswer = document.createElement("p");
    createdAnswer.innerHTML = responses[randNum]; 
    answer.appendChild(createdAnswer); 
}
