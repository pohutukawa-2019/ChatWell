/* eslint-disable no-console */

let users = 0

const socket = (io) => {
  io.on('connection', (socket) => {
    console.log(`A user has connected: ${socket.id}`)
    users++
    console.log(`Users connected: ${users}`)
    // Join room
    // socket.join('room1')
    if (users <= 2) {
      socket.join('room1')
    } else {
      socket.join('room2')
    }

    // Send message
    socket.on('send message', (data) => {
      io.to('room1').emit('new message', data)
    })

    //  Disconnect message
    socket.on('disconnect', () => {
      console.log('A user has disconnected')
      users--
    })
  })
}

module.exports = socket

  //subscribe a socket to an available channel
  //socket.join('room')
  //if the channel already has 2 users
  //create a new channel and subscribe to that
  //socket.join('room2)
  //leave room
  //socket.leave('room')
  //create new room
  //socket.join('new room')