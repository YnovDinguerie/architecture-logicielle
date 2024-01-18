// const express = require('express')
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
const app = express()
// const http = require('http')
const server = http.createServer(app)
// const { Server } = require("socket.io")
const io = new Server(server)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})
