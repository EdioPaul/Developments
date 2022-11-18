const express = require('express');
const app = express();
const { createServer } = require('http');
const server = createServer(app);

const { Server } = require('socket.io');
const port = 3001;

const io = new Server(server, {
  cors: {
    origin: 'https://localhost:3000',
  }
});

io.on('connection', socket => {
  console.log(`a user connected to ${socket.id}`);

  socket.on('join_room', ({ user, room }) => {
    socket.join(room);
  })

  socket.on('send_msg', ({ room, user, message }) => {
    const data = { user: user, message: message }
    socket.io(room).emit('receive_msg', data);
  });
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});