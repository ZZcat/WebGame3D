const express = require('express');
const app = express();
const serv = require('http').Server(app);

app.use('/', express.static(__dirname + '/public/'));

serv.listen(2000);
console.log('Server started.');

const io = require('socket.io')(serv);

const fs = require('fs');


setInterval(() => {
	//update();
	//send();
}, 1000 / 60);