var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const { log } = require('console');
var fs = require('fs');
var userNum = 0;
var logStat = false;
var badUser = false;
var badUserNum = 0;
//const { emit } = require('process');
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let rawdata = fs.readFileSync('test.txt');
let data = JSON.parse(rawdata);
var keys = Object.keys(data);

io.on('connection', (socket) => {
  keys = Object.keys(data);
  console.log(data);
  socket.on('userData', (newUser, newPass) => {
    keys = Object.keys(data);
    badUser = false;
    console.log(newUser + " " + newPass);
    if(data[newUser] != undefined) {
      badUser = true;
    }
    if (badUser == true) {
      io.emit("userEx", (newUser));
    } else {
      data[newUser] = newPass;
      console.log(data)
      io.emit("signSucc", (true));
    }
  });
  socket.on('userLog', (logUser, logPass) => {
    logStat = false;
    if(data[logUser] == logPass) {
      logStat = true;
    }
    io.emit("logInfo", (logStat));
    /*
    keys = Object.keys(data);
    console.log(data)
    console.log(logUser + " " + logPass);
    for(var i = 0; i < keys.length; i++) {
      if (keys[i] == logUser) {
        userNum = i;
        break
      }
    }

    console.log(keys[userNum] + " " + data[logUser])
    if (logUser == keys[userNum] && logPass == data[logUser]) {
      logStat = true;
      io.emit("logInfo", (logStat));
      console.log("correctLog")
    }
    else{
      io.emit("logInfo", (logStat));
      console.log("wrongLog");
    }
    */
  })
});

http.listen(3000, "192.168.0.13", () => {
  console.log('listening on *:3000');
});
