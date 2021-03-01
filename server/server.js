const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})


http.listen(4000, function() {
  console.log('listening on port 4000')
})
