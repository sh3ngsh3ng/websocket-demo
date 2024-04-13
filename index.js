const path = require('path')
const http = require('http');
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)


const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))

// let count = 0

io.on('connection', (socket) => {
    console.log("New connection")
    // socket.emit('countupdated', count)

    // socket.on('increment', () => {
    //     count++
    //     // socket.emit('countupdated', count)
    //     io.emit('countupdated', count)
    // })

    socket.emit('message', 'Hello from server')

    socket.on('sendMessage', (e) => {
        console.log("called")
        io.emit('broadcast', e)
    })
})

server.listen(3000, () => {
    console.log("server started")
})