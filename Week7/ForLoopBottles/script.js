function printLyrics() {
    var whereTheWordsGo = document.getElementById("whereTheWordsGo");
    
    //could finish at two and just write out zero and one because one likes to be special
    for (let i = 99; i > 0; i--) {
        let lineOne = document.createElement("p"); 
        let lineTwo = document.createElement("p"); 
        lineOne.innerHTML = i + " bottles of beer on the wall, " + i + " bottles of beer. ";
        lineTwo.innerHTML = "Take one down, pass it around, " + (+i-1) + " bottles of beer on the wall... ";
        whereTheWordsGo.appendChild(lineOne); 
        whereTheWordsGo.appendChild(lineTwo); 
    }
}



