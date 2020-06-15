var character = document.getElementById("character");
var block = document.getElementById("block");
var dead = document.getElementById("dead.start");
//remove later
var startGame = function() {
    dead.innerHTML = "Game Starting In 3 Seconds";
    dead.style.textAlign = "center";
    dead.style.background = "url(\"youdead.png\")"
    setTimeout(function() {
        dead.innerHTML = "";
    }, 3000)
}
//                                                     levels
//clones for levels also make at least one level tomorrow you lazy frick just a reminder (◕‿◕)
var spawn = function(p) {
    var blockClone1 = block.cloneNode(true);
    var blockClone2 = block.cloneNode(true);
    var blockClone3 = block.cloneNode(true);
    var blockClone4 = block.cloneNode(true);
    var blockClone5 = block.cloneNode(true);
    var blockClone6 = block.cloneNode(true);
    var blockClone7 = block.cloneNode(true);
    var blockClone8 = block.cloneNode(true);
    var blockClone9 = block.cloneNode(true);
    var blockClone10 = block.cloneNode(true);
    var blockClone11 = block.cloneNode(true);
    var blockClone12 = block.cloneNode(true);
    var blockClone13 = block.cloneNode(true);
    var blockClone14 = block.cloneNode(true);
    var blockClone15 = block.cloneNode(true);
    var blockClone16 = block.cloneNode(true);
    var blockClone17 = block.cloneNode(true);
    var blockClone18 = block.cloneNode(true);
    var blockClone19 = block.cloneNode(true);
    var blockClone20 = block.cloneNode(true);
    blockClone20.style.background = "url(finish.png) 0 0";
    if (p == 1) {
        document.getElementById("game").appendChild(blockClone1);
    }
    if (p == 2) {
        document.getElementById("game").appendChild(blockClone2);
    }
    if (p == 3) {
        document.getElementById("game").appendChild(blockClone3);
    }
    if (p == 4) {
        document.getElementById("game").appendChild(blockClone4);
    }
    if (p == 5) {
        document.getElementById("game").appendChild(blockClone5);
    }
    if (p == 6) {
        document.getElementById("game").appendChild(blockClone6);
    }
    if (p == 7) {
        document.getElementById("game").appendChild(blockClone7);
    }
    if (p == 8) {
        document.getElementById("game").appendChild(blockClone8);
    }
    if (p == 9) {
        document.getElementById("game").appendChild(blockClone9);
    }
    if (p == 10) {
        document.getElementById("game").appendChild(blockClone10);
    }
    if (p == 11) {
        document.getElementById("game").appendChild(blockClone11);
    }
    if (p == 12) {
        document.getElementById("game").appendChild(blockClone12);
    }
    if (p == 13) {
        document.getElementById("game").appendChild(blockClone13);
    }
    if (p == 14) {
        document.getElementById("game").appendChild(blockClone14);
    }
    if (p == 15) {
        document.getElementById("game").appendChild(blockClone15);
    }
    if (p == 16) {
        document.getElementById("game").appendChild(blockClone16);
    }
    if (p == 17) {
        document.getElementById("game").appendChild(blockClone17);
    }
    if (p == 18) {
        document.getElementById("game").appendChild(blockClone18);
    }
    if (p == 19) {
        document.getElementById("game").appendChild(blockClone19);
    }
    if (p == 20) {
        document.getElementById("game").appendChild(blockClone20);
    }
}
//document.getElementById("game").appendChild(blockClone20)
//LEVEL 1
var lvOne  = function() {
    
}
//                                                      end of levels


startGame();
block.style.top = "130px";

var iDidnt = function() {
    location.reload();
}
var point = 0;
var x = document.getElementById("x");
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
    var blockBottom = parseInt(window.getComputedStyle(block).getPropertyValue("bottom"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (blockLeft < 70 && blockLeft > 50 && characterTop >= 110) {
        if (characterTop == 180 && blockTop <= 110) {
            return;
        }
        block.style.animation = "none";
        block.style.display = "none";
        //alert("u ded");
        //document.getElementById("t").innerHTML = "You are bad at this game, and it doesn't have to do with how trash this is.";
        dead.innerHTML = "You Got Eaten";
        dead.style.textAlign = "center";
        dead.style.background = "url(\"youdead.png\")"
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