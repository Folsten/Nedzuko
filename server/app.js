const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/autorization', (req, res) => {
  res.send('Authorization page');
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});