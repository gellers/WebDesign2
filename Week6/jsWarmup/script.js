function openDialog(){
    //opens the dialog we want to open
    var cover = document.getElementbyId("openMe");
    cover.classList.remove("hidden");
}

function closeDialog(){
    //closes the dialog we want to close
    var cover = document.getElementById("openMe");
    cover.classList.add("hidden");
}
