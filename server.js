// server.js
const express = require('express');
var figlet = require("figlet");
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);




app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user co');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('사용자가 나감-dkx server기준으로 창을 닫을 경우에만 인식합니다.');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`dkx 서버 express 기반 프로그램을 이용해주셔서 대단히 감사합니다.계속해서 다음에 접속하거나 백앤드 혹스팅 서비스를 이용할경우 지정된 사이트로 접속해주십시오.http://localhost:${PORT}-새로운 dokdox server 을 이용해주셔서 대단히 감사합니다!`);
});
console.log("완료하였습니다.")
figlet("dokdox _server x", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
console.log("dokdox server x 를 이용해주셔서 대단히 감사합니다!모든 작업을 성공적으로 완료하였고 오류를 발견하지 못했습니다!이용해주셔서 대단히 감사합니다!!!")