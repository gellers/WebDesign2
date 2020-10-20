//doesn't work at all
function getDivNum() {
    //the element that takes in values
    var numOfDiv = document.getElementById("numOfDiv");
    //number of divs wanted 
    var numDiv = numOfDiv.value;
    var counter = 0; 
    while (counter < numDiv) {
        var div = document.createElement("div");
    div.setAttribute("id", "Div " + counter); 
    div.append = div.getAttribute("id");
    counter++;
    }

    document.body.insert
    
    alert("done");
  }
