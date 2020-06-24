var hyperLink = document.getElementById("hyper");//hyper.value = "__";
var update = function() {
    console.log(document.getElementById("hyper").value)
    yes.setAttribute('src', document.getElementById("hyper").value);
}
var stop = function() {
    yes.setAttribute('src', "about:blank");
}
var playMusic = function() {
    document.getElementById("y").play();
}
var stopMusic = function() {
    document.getElementById("y").pause();
}