// server.ts
import express from 'express'
import http from 'http'
import { Server, Socket } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket: Socket) => {
    console.log('A user connected')

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('chat message', (msg: string) => {
        io.emit('chat message', msg)
    })
})

server.listen(3000, () => {
    console.log('Server listening on *:3000')
})
