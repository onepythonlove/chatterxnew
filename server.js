const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

io.on('connection', (socket) => {
    console.log('A user connected');

    const userName = socket.handshake.headers.cookie
        ? decodeURIComponent(socket.handshake.headers.cookie.split('=')[1])
        : '익명의 사용자';

    socket.on('chat message', (msg) => {
        io.emit('chat message', `${userName}: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`완료했습니다!dkx server platform`);
});
