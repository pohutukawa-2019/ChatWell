/* eslint-disable no-console */

let availableClients = []
let availableSponsors = []

const socket = (io) => {
  // Connect on page load
  io.on('connection', (socket) => {
    console.log(`A user has connected: ${socket.id}`)
    let users = io.engine.clientsCount
    console.log(`Users connected: ${users}`)
    let user = socket.id
    let room = ''

    // Join a room
    socket.on('subscribe', (data) => {
      const usertype = data
      room = usertype + user
      // as a client:
      if (usertype === 'client') {
        // if an available sponsor exists
        if (availableSponsors.length > 0) {
          // join the first available sponsor room
          socket.join(availableSponsors[0])
          console.log(`Joined Sponsor room: ${availableSponsors[0]}`)
          // change room to be available sponsors' room
          room = availableSponsors[0]
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
          // change room to be available clients' room
          room = availableClients[0]
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

    // Send message to room that was joined
    // Either room that the user created if there were no available rooms of the opposite type
    // Or room that the user joined in the list of available rooms
    socket.on('send message', (data) => {
      io.in(room).emit('new message', data)
    })

    // Leave a room
    socket.on('unsubscribe', () => {
      console.log(`User ${room} has left room: ${room}`)
      socket.leave(room)
      removeIfAvailable(room)
    })

    //  Disconnect on page close
    socket.on('disconnect', () => {
      console.log(`User ${room} has disconnected`)
      users = io.engine.clientsCount
      console.log(`Users connected: ${users}`)
      removeIfAvailable(room)
    })
  })
}

module.exports = socket

// Supporting functions

// if the user was in an availability list when closing the window
// (which would only happen if they didn't get a pairing)
// or chose to disconnect after connecting but before being matched with a pair
// remove them from the availability list
const removeIfAvailable = (room) => {
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
}

  // // Join room
  // if (users % 2 !== 0) {
  //   socket.join(Object.keys(io.engine.clients)[users - 1])
  //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 1])
  // } else {
  //   socket.join(Object.keys(io.engine.clients)[users - 2])
  //   console.log('Room name:' + Object.keys(io.engine.clients)[users - 2])
  // }

  // // Send message
  // socket.on('send message', (data) => {
  //   if (users % 2 !== 0) {
  //     io.to(Object.keys(io.engine.clients)[users - 1]).emit('new message', data)
  //   } else {
  //     io.to(Object.keys(io.engine.clients)[users - 2]).emit('new message', data)
  //   }
  // })

  // Old way of getting user socket id
  // room = usertype + Object.keys(io.engine.clients)[users - 1]
