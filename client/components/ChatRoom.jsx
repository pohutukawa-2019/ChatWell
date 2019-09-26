import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

socket.on('new message', (message) => {
  console.log(`this is the client side message: ${message}`)
})

export default class ChatRoom extends Component {
  state = {
    message: '',
    socket: null,
    user: null
  }

  componentWillMount() {
      this.initSocket()
    //   this.setUser()
  }

  initSocket = () => {
      socket.on('connect', () => {
          console.log("Connected to Client")
      })
      this.setState({
          socket
      })
  }

  setUser = (user) => {
    const socket = this.state.socket
    // const user = socket.id
    socket.emit('user connected', user)
    this.setState({
        user
    })
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