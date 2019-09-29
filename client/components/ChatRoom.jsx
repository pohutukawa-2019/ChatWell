import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect()

export default class ChatRoom extends Component {

  state = {
    message: '',
    username: this.props.username || 'anonymous',
    usertype: this.props.usertype || 'client',
    messages: ['System: Hit the connect button to find a pair!'],
    isConnected: false,
    topics: this.props.topics || [
      'Depression',
      'Anxiety'
    ]
  }

  componentDidMount () {
    this.initSocket()
  }

  initSocket = () => {
    socket.on('connect', () => {
      console.log('Client connected to server')
    })
    socket.on('new message', (messagePackage) => {
      this.setState({
        messages: [
          ...this.state.messages,
          `${messagePackage.username} (${messagePackage.time}): ${messagePackage.message}`
        ]
      })
    })
    socket.on('system message', (message) => {
      message = `System: ${message}`
      this.setState({
        messages: [...this.state.messages, message]
      })
    })
    socket.on('confirm disconnect', () => {
      socket.emit('unsubscribe')
      this.setState({
        isConnected: false,
        messages: [
          'System: A user has left the session. Session ended.',
          'System: Hit the connect button to find new pair!'
        ]
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
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const messagePackage = {
      message: this.state.message,
      username: this.state.username,
      time: `${hours}:${minutes}`
    }
    socket.emit('send message', messagePackage)
    this.setState({
      message: ''
    })
    socket.emit('send message', this.state.message)
  }

  connectHandler = () => {
    const userData = {
      username: this.state.username,
      usertype: this.state.usertype,
      topics: this.state.topics
    }
    socket.emit('subscribe', userData)
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

  switchUsertype = () => {
    if (this.state.usertype === 'client') {
      this.setState({
        usertype: 'sponsor'
      })
    } else {
      this.setState({
        usertype: 'client'
      })
    }
  }

  render () {
    return (
      <>
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
        <button type='button' onClick={this.switchUsertype}>Current State: {this.state.usertype}</button>
      </>
    )
  }
}
