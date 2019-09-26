import React, { Component } from 'react'
import io from 'socket.io-client'

io.connect('http://localhost:3000')

export default class ChatRoom extends Component {

  render () {
    return (
      <>
        <h1>This is the socket component</h1>
      </>
    )
  }
}
