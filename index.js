var character = document.getElementById("character");
var block = document.getElementById("block");
//remove later
block.style.top = "110px";
var blockClone = block.cloneNode(true);
var iDidnt = function() {
    location.reload();
}
var point = 0;
var x = document.getElementById("x");
setTimeout(function() {document.getElementById("game").appendChild(blockClone);}, 1000);
blockClone.style.top = "90px";
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
    if (blockLeft < 70 && blockLeft > 50 && characterTop >= 110) {
        if (characterTop == 180 && blockLeft < 70 && blockLeft > 50) {
            return;
        }
        block.style.animation = "none";
        block.style.display = "none";
        blockClone.style.animation = "none";
        blockClone.style.display = "none";
        //alert("u ded");
        document.getElementById("t").innerHTML = "You are bad at this game, and it doesn't have to do with how trash this is.";
    }

}, 5);
var getPoint = setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (characterLeft >= blockLeft) {
        point ++;
        //console.log(point);
        document.getElementById("point").innerHTML = point;
    }
}, 110);
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
    if (e.keyCode == 16){
        down();
    }
    if (e.keyCode == 82){
        iDidnt();
    }
}
function down() {
    if (character.classList != "crouch") {
    character.classList.add("crouch");
    }
    setTimeout(function(){
        character.classList.remove("crouch");
    }, 500);
}
x.play();