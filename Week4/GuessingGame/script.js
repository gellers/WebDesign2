var lowerBoundOfGuess = 1;
var upperBoundOfGuess = 16; 

function createGuess(lowerBoundOfGuess, upperBoundOfGuess) {
    let guess = Math.trunc(Math.random() * (upperBoundOfGuess - lowerBoundOfGuess) + lowerBoundOfGuess);
    return guess; 
}

var response; 
var isCorrectNum = false; 
var numberToGuess = prompt("Enter a number between 1 and 16");
var guess; 

while (isCorrectNum == false) {
    guess = createGuess(lowerBoundOfGuess, upperBoundOfGuess); 
    alert("The computer guesssed " + guess); 
    response = prompt("Is the guess correct (0), smaller (1), or larger (2) (than your number)?");

    //larger than user's number
    if (response == 2) {
        upperBoundOfGuess = guess - 1; 
    //smaller than user's number
    } else if (response == 1) {
        lowerBoundOfGuess = guess + 1;  
    //correct
    } else if (response == 0) {
        isCorrectNum = true;  
    } else {
        alert("Invalid input"); 
    }
}

alert("The computer guessed correctly. Yay!");