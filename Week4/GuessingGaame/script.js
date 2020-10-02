//figure out what's wrong

function findGuessRange(guessMax, guessMin) {
    return Math.abs(guessMin - guessMax);
}

function createGuess(guessRange, guessMin) {
    return Math.trunc(Math.random()* (guessRange + 1) +guessMin);
}

var num = prompt("Enter a number between 1 and 16");
//console.log(num);

//guess range: range of number that are between largest and smallest guess
var guessMin = 1;
var guessMax = 16;
console.log(findGuessRange(guessMax, guessMin));
//the number the program is trying to guess
var guess = createGuess(findGuessRange(guessMax, guessMin), guessMin);
//response to guess of computer from user
var response;
var isCorrectNum = false;



while (isCorrectNum == false) {
    alert("The computer guessed " + guess);
    response = prompt("Is the guess correct (0), smaller (1), or larger (2) (than your number)?");
    
    if (response == 0) {
        isCorrectNum = true;
    } else if (response == 1) {
        guessMax--; 
    } else if (response == 2) {
        guessMin++; 
    } else{
        alert("Invalid input"); 
    }
    alert(isCorrectNum);

    //somethings wrong is this part
    guess = createGuess(findGuessRange(guessMax, guessMin), guessMIn);

    
}



alert("finished"); 