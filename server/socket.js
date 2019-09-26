/* eslint-disable no-console */

const socket = (io) => {
  io.on('connection', (socket) => {
    console.log(`A user has connected: ${socket.id}`)

    socket.on('disconnect', (socket) => {
      console.log('A user has disconnected')
    })
  })
}

module.exports = socket
