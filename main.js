var socket = io();
var newUser = document.getElementById("newUsername");
var newPass = document.getElementById("newPassword");
var logUser = document.getElementById("username");
var logPass = document.getElementById("password");
var userDataUser = NaN;
var userDataPass = NaN;
var userLogUser = NaN;
var userLogPass = NaN;

/*
var enterSign = function() {
//            userDataUser = newUser.value;
//            userDataPass = newPass.value;
    console.log(newUser.value + " " + newPass.value);
    socket.emit("test", {"user": newUser.value, "password": newPass.value});
    
}
*/
var enterSign = function() {
//            userDataUser = newUser.value;
//            userDataPass = newPass.value;
    console.log(newUser.value + " " + newPass.value);
    socket.emit("userData", newUser.value, newPass.value);
    
}

var enterLog = function() {
//            userLogUser = signUser.value;
//            userLogPass = signPass.value;
    socket.emit("userLog", logUser.value, logPass.value);
}
