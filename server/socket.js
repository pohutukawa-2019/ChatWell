/* eslint-disable no-console */

const socket = (io) => {
  io.on('connection', (socket) => {
    let users = io.engine.clientsCount
    console.log(`A user has connected: ${socket.id}`)
    console.log(`Users connected: ${users}`)

    // console.log(io.engine.clientsCount)
    // console.log(Object.keys(io.engine.clients))

    // Join room
    if (users % 2 !== 0) {
      socket.join(Object.keys(io.engine.clients)[users - 1])
      console.log('Room name:' + Object.keys(io.engine.clients)[users - 1])
    } else {
      socket.join(Object.keys(io.engine.clients)[users - 2])
      console.log('Room name:' + Object.keys(io.engine.clients)[users - 2])
    }

    // Send message
    socket.on('send message', (data) => {
      if (users % 2 !== 0) {
        io.to(Object.keys(io.engine.clients)[users - 1]).emit('new message', data)
      } else {
        io.to(Object.keys(io.engine.clients)[users - 2]).emit('new message', data)
      }
    })

    //  Disconnect message
    socket.on('disconnect', () => {
      console.log('A user has disconnected')
      users--
    })
  })
}

module.exports = socket

  //leave room
  //socket.leave('room')
  //create new room
  //socket.join('new room')