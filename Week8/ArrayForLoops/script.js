"use strict"
var colors = ["green", "blue", "red", "yellow"]; 
function run() {
    // for (let i = 0; i < colors.length; i++) {
    //     console.log(colors[i]);
    // }

    //write only iteration of colors array; for…of loop
    for (let color of colors) {
        console.log(color); 
    }
}