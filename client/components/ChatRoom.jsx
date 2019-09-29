import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import { 
  MessagesContainer,
  FlexContainer,
  SendMessageForm,
  SendButton,
  MessageInput,
  ConnectionButton,
  Message
} from './ChatRoomStyles'

const socket = io.connect()

export default class ChatRoom extends Component {

  state = {
    message: '',
    username: this.props.username || 'Anon',
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

  componentDidMount () {
    this.initSocket()
  }

  initSocket = () => {
    socket.on('connect', () => {
        console.log("Client connected to server")
    })
    socket.on('new message', (messagePackage) => {
      console.log(messagePackage)
      this.setState({
        messages: [
          ...this.state.messages, 
          messagePackage
        ]
      })
      this.scroll()
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
      this.scroll()
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
      this.scroll()
    })
  }

  scroll = () => {
    const messageContainer = document.getElementById('scroll-container')
    messageContainer.scrollTop = messageContainer.scrollHeight
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
          <MessagesContainer id='scroll-container'>
            {this.state.messages.map((message, i) => {
              return (
                <div key={i} 
                  style={
                    (message.username === 'System') 
                      ? {textAlign: 'center', padding: '5px 10px', margin: '0px'} 
                      : (message.username === this.state.username) 
                        ? {textAlign: 'left', padding: '5px 30px', margin: '0px'} 
                        : {textAlign: 'right', padding: '5px 30px', margin: '0px'}
                  }
                >
                  <p style={(message.username !== 'System') ? {marginTop: '0px'} : null }>[{message.timestamp}]<strong> {message.username}</strong></p>
                  <Message user={message.username !== 'System'}>
                    {(message.username === 'System') ? <i>{message.message}</i> : message.message}
                  </Message>
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
          <Link className='pure-button' to='/'>Back to main</Link>
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

document.body.style.margin = '0px'
