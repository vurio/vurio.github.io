var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}
var commitDie = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 70 && blockLeft > 50 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        //alert("u ded");
        document.getElementById("t").innerHTML = "You are bad at this game, and it doesn't have to do with how trash this is.";
    }

}, 10);
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
}
var iDidnt = function() {
    location.reload();
}
var point = 0;
var x = document.getElementById("x");
x.play();