import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

socket.on('new message', (message) => {
  console.log(`this is the client side message: ${message}`)
})

export default class ChatRoom extends Component {
  state = {
    message: ''
  }

  onChangeHandler = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  onClickHandler = (evt) => {
    evt.preventDefault()
    socket.emit('send message', this.state.message)
  }

  render () {
    return (
      <>
        <h1>This is the socket component</h1>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br/>
        <input type="text" onChange={this.onChangeHandler}/>
        <button type="submit" onClick={this.onClickHandler}>Send</button>
      </>
    )
  }
}
