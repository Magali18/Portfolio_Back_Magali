
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server,{
  cors:{origin:'*'}
});
io.on('connection',(socket)=>{
  console.log('Se ha conectado un cliente')
})

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});




