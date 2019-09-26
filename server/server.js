const path = require('path')
const express = require('express')

const topics = require('./routes/topics')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/topics', topics)

module.exports = server