import React, { Component } from 'react'
import io from 'socket.io-client'

import { 
  MessagesContainer,
  FlexContainer,
  SendMessageForm,
  SendButton,
  MessageInput,
  ConnectionButton
} from './ChatRoomStyles'

const socket = io.connect()

export default class ChatRoom extends Component {

  state = {
    message: '',
    username: this.props.username || 'Anonymous',
    usertype: this.props.usertype || 'client',
    messages: [{
      username: 'System',
      message: 'Hit the connect button to find a pair!',
      timestamp: createTimeStamp()
    }],
    isConnected: false,
    topics: this.props.topics || [
      'Depression',
      'Anxiety'
    ]
  }

  componentDidMount() {
      this.initSocket()
  }

  initSocket = () => {
      socket.on('connect', () => {
        console.log("Client connected to server")
      })
      socket.on('new message', (messagePackage) => {
        this.setState({
          messages: [
            ...this.state.messages, 
            messagePackage
          ]
        })
      })
      socket.on('system message', (message) => {
        message = {
          username: 'System',
          message: message,
          timestamp: createTimeStamp()
        }
        this.setState({
          messages: [...this.state.messages, message]
        })
      })
      socket.on('confirm disconnect', () => {
        socket.emit('unsubscribe')
        this.setState({
          isConnected: false,
          messages: [
            {
              username: 'System',
              message: 'A user has left the session. Session ended.',
              timestamp: createTimeStamp()
            },
            {
              username: 'System',
              message: 'Hit the connect button to find a new pair!',
              timestamp: createTimeStamp()
            }
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
    const messagePackage = {
      message: this.state.message,
      username: this.state.username,
      timestamp: createTimeStamp()
    }
    socket.emit('send message', messagePackage)
    this.setState({
      message: ''
    })
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
        <FlexContainer>
          <h2>Chat Well</h2>
          <MessagesContainer>
            {this.state.messages.map((message, i) => {
              return (
                <div key={i} 
                  style={
                    (message.username === 'System') 
                      ? {textAlign: 'center', padding: '10px'} 
                      : (message.username === this.state.username) 
                        ? {textAlign: 'left', padding: '10px'} 
                        : {textAlign: 'right', padding: '10px'}
                  }
                >
                  <p>({message.timestamp})<strong> {message.username}:</strong></p>
                  <p>
                    {(message.username === 'System') ? <i>{message.message}</i> : message.message}
                  </p>
                </div>
              )
            })}
          </MessagesContainer>
          <SendMessageForm onSubmit={this.messageSendHandler}>
            <MessageInput type="text" value={this.state.message} onChange={this.messageInputHandler} disabled={!this.state.isConnected} />
            <SendButton type='submit' disabled={!this.state.isConnected} >Send</SendButton>
          </SendMessageForm>
          {!this.state.isConnected && < ConnectionButton type="button" onClick={this.connectHandler} connect >Connect</ConnectionButton>}
          {this.state.isConnected && < ConnectionButton type="button" onClick={this.disconnectHandler} disconnect >Disconnect</ConnectionButton>}
          <button type='button' onClick={this.switchUsertype}>Current State: {this.state.usertype}</button>
        </FlexContainer>
      </>
    )
  }
}

const createTimeStamp = () => {
  const time = new Date()
  const hours = time.getHours()
  let fixedHours = ''
  if (hours < 10) {
    fixedHours = `0${hours}`
  } else {
    fixedHours = String(hours)
  }
  const minutes = time.getMinutes()
  let fixedMinutes = ''
  if (minutes < 10) {
    fixedMinutes = `0${minutes}`
  } else {
    fixedMinutes = String(minutes)
  }
  const seconds = time.getSeconds()
  let fixedSeconds = ''
  if (seconds < 10) {
    fixedSeconds = `0${seconds}`
  } else {
    fixedSeconds = String(seconds)
  }
  return `${fixedHours}:${fixedMinutes}:${fixedSeconds}`
}