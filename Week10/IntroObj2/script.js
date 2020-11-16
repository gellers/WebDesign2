let favorites = []; 

//saves to array and JSON
//add validation; w/ ternary operator maybe?
function save() {
    let displayDiv = document.getElementById("display"); 

    let newItem = document.getElementById("newItem").value; 
    let newReason = document.getElementById("newReason").value; 
    let newColor = document.getElementById("newColor").value;
    let newAge = document.getElementById("newAge").value; 

    let favorite = {
        item: newItem,
        reason: newReason, 
        color: newColor,
        age: newAge
    }; 
    favorites.push(favorite); 

    let jsonFavorites = JSON.stringify(favorites); 
    localStorage.setItem("favorites", jsonFavorites);

    display(); 
}

//displays saved stuff
function display() {
    let jsonFavorites = localStorage.getItem("favorites"); 
    if (jsonFavorites == null) {
        favorites = []; 
    } else {
        favorites = JSON.parse(jsonFavorites); 
    }
    
    for (let i = 0; i < favorites.length; i++) {
        let displayDiv = document.getElementById("display"); 

        let item = document.createElement("h3"); 
        item.innerHTML = favorites[i].item; 

        let reason = document.createElement("p"); 
        reason.innerHTML = favorites[i].reason; 

        let color = document.createElement("p"); 
        color.innerHTML = favorites[i].color;

        let age = document.createElement("p"); 
        age.innerHTML = favorites[i].age; 

        displayDiv.appendChild(item);
        displayDiv.appendChild(reason); 
        displayDiv.appendChild(color); 
        displayDiv.appendChild(age); 
    }

}