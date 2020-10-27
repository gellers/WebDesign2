var response = prompt("What\'s a yes/no question you have?");

//random number 1 to 8
var rand = Math.trunc(Math.random() * 8);

if (rand === 1) {
    alert("Decidely so")
} else if (rand === 2) {
    alert("Most certainly not");
} else if (rand === 3) {
    alert("Certainly")
} else if (rand === 4) {
    alert("Of course");
} else if (rand === 5) {
    alert("Why not?") 
} else if (rand === 6) {
    alert("Don’t count on it");
} else if (rand === 7) {
    alert("Cannot tell you now")
} else {
    alert("Outlook not so good");
}
