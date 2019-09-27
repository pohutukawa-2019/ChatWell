/* eslint-disable no-console */

let availableClients = []
let availableSponsors = []

const socket = (io) => {
  io.on('connection', (socket) => {
    console.log(`A user has connected: ${socket.id}`)
    let users = io.engine.clientsCount
    console.log(`Users connected: ${users}`)
    let room = ''

    // pairs users based on type
    socket.on('usertype', (data) => {
      const usertype = data
      room = usertype + Object.keys(io.engine.clients)[users - 1]
      // as a client:
      if (usertype === 'client') {
        // if an available sponsor exists
        if (availableSponsors.length > 0) {
          // join the first available sponsor room
          socket.join(availableSponsors[0])
          console.log(`Joined Sponsor room: ${availableSponsors[0]}`)
          // change room to be available sponsors' room
          // room = availableSponsors[0]
          // then remove that sponsor room from the list of available sponsors
          availableSponsors.splice(0, 1)
          console.log(`Remaining available Sponsors: ${availableSponsors}`)
        } else {
          // otherwise, create an available client room
          socket.join(room)
          console.log(`Created new Client room: ${room}`)
          // add this room to the list of available clients
          availableClients.push(room)
          console.log(`Available Clients: ${availableClients}`)
        }
      }
      // as a sponsor:
      else {
        // if an available client room exists
        if (availableClients.length > 0) {
          // join the first available client room
          socket.join(availableClients[0])
          console.log(`Joined Client room: ${availableClients[0]}`)
          // room = availableSponsors[0]
          // then remove that client room from the list of available clients
          availableClients.splice(0, 1)
          console.log(`Remaining available Clients: ${availableClients}`)
        } else {
          // otherwise, create an available sponsor room
          socket.join(room)
          console.log(`Created new Sponsor room: ${room}`)
          // add this room to the list of available sponsors
          availableSponsors.push(room)
          console.log(`Available Sponsors: ${availableSponsors}`)
        }
      }
    })

    // Join room
    // if (users % 2 !== 0) {
    //   socket.join(Object.keys(io.engine.clients)[users - 1])
    //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 1])
    // } else {
    //   socket.join(Object.keys(io.engine.clients)[users - 2])
    //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 2])
    // }

    // Send message to room that was joined
    // Either room that the user created if there were no available rooms of the opposite type
    // Or room that the user joined in the list of available rooms
    socket.on('send message', (data) => {
      socket.to(room).emit('new message', data)
    })

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
      console.log(`User ${room} has disconnected`)
      users--
      // if the user was in an availability list when closing the window
      // (which would only happen if they didn't get a pairing)
      // remove them from the availability list
      let index = -1
      // for clients
      index = availableClients.findIndex((el) => {
        return el === room
      })
      if (index > -1) {
        availableClients.splice(index, 1)
        console.log(`User ${room} removed from availableClients`)
      }
      // for sponsors
      index = availableSponsors.findIndex((el) => {
        return el === room
      })
      if (index > -1) {
        availableSponsors.splice(index, 1)
        console.log(`User ${room} removed from availableSponsors`)
      }
    })
  })
}

module.exports = socket

// message to the specific room that you have connected to

// button for leaving a room
// leave room
// socket.leave('room')

// button for connecting to a room - instead of on component did mount
// create new room
// socket.join('new room')
