/* eslint-disable no-console */

const socket = (io) => {
    io.on('connection', (socket) => {
      console.log(`A user has connected: ${socket.id}`)
  
      // Send message
      socket.on('send message', (data) => {
        io.emit('new message', { message: data })
        console.log(`message: ${data}`)
      })
  
      //  Disconnect message
      socket.on('disconnect', () => {
        console.log('A user has disconnected')
      })
    })
  }
  
  module.exports = socket