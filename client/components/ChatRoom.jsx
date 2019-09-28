import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

export default class ChatRoom extends Component {

  state = {
    message: '',
    username: this.props.username || 'anonymous',
    usertype: this.props.usertype || 'client',
    messages: [],
    isConnected: false
  }

  componentDidMount() {
      this.initSocket()
  }

  initSocket = () => {
      socket.on('connect', () => {
        console.log("Client connected to server")
      })
      // if not connected, append something like 'theres no one here right now!'
      // also change message to be an object containing the sender
      // and time the message was sent, and display these alongside the message
      socket.on('new message', (message) => {
        this.setState({
          messages: [...this.state.messages, message]
      })
    })
  }

  messageInputHandler = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  messageSendHandler = (evt) => {
    evt.preventDefault()
    socket.emit('send message', this.state.message)
    this.setState({
      message: ''
    })
  }

  connectHandler = () => {
    socket.emit('subscribe', this.state.usertype)
    this.setState({
      isConnected: true
    })
  }

  disconnectHandler = () => {
    socket.emit('unsubscribe')
    this.setState({
      isConnected: false,
      messages: []
    })
  }

  render () {
    return (
      <>
        <h1>This is the chat component</h1>
        <h2>Messages:</h2>
        {this.state.messages.map((message, i) => {
          return <p key={i}>{message}</p>
        })}
        <form onSubmit={this.messageSendHandler}>
          <input type="text" value={this.state.message} onChange={this.messageInputHandler}/>
          <button type="submit">Send</button>
        </form>
        <br />
        {!this.state.isConnected && <button type="button" onClick={this.connectHandler}>Connnect</button>}
        {this.state.isConnected && <button type="button" onClick={this.disconnectHandler}>Disconnect</button>}
      </>
    )
  }
}