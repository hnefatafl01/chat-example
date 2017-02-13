const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/'));

app.get('/', (req,res) => res.render('index'));

io.on('connection', function(socket) {
  console.log("Someone entered the chat room!");
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log(msg);
  })
  socket.on('disconnect', () => {
    console.log("Someone left the chatroom.");
  })
});

server.listen(3000, () => console.log('listening on port 3000'))
