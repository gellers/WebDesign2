var response = prompt("What is your favorite number?");

if (response >= 1000000) {
    alert("That's a large number.");
} else if (response < 0) {
    alert("Your favorite number is negative.");
} else if (response == 42) {
    alert("That's the answer.")
}else {
    alert("Your favorite number is " + response + ".")
}