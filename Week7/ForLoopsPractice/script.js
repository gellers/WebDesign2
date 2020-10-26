function loop() {
    var container = document.getElementById("container");
    for (var i = 0; i < 10; i++) {
        var el = document.createElement("div");
        el.classList.add("count");
        el.innerHTML = i;
        container.appendChild(el); 
    }
}