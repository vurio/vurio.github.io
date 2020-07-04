function iadi() {
    if (document.getElementById("platformer").classList != "bru") {
        document.getElementById("platformer").classList.add("bru");
    }
    setTimeout(function(){
        document.getElementById("platformer").classList.remove("bru");
    }, 10);
}
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        iadi();
    }
}