const path = require('path')
const express = require('express')
const socket = require('socket.io')
const app = express()
const server = require('http').createServer(app)
const io = socket(server)

const topics = require('./routes/topics')
const socketIO = require('./socket')
// const routes = require('./routes')

socketIO(io)

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use('/api/topics', topics)

module.exports = server
