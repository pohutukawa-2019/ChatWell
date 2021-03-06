const path = require('path')
const express = require('express')
const socket = require('socket.io')
const app = express()
const server = require('http').createServer(app)
const io = socket(server)

const authRoutes = require('./routes/auth')
const topics = require('./routes/topics')
const socketIO = require('./socket')

socketIO(io)

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use('/api', authRoutes)
app.use('/api/topics', topics)

module.exports = server
