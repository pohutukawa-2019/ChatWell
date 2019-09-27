import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

export default class ChatRoom extends Component {
  constructor (props) {
    super(props)
    socket.on('new message', (message) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    })
  }

  state = {
    message: '',
    usertype: 'client',
    messages: [],
    user: null
  }

  componentDidMount () {
    this.initSocket()
    //   this.setUser()
  }

  initSocket = () => {
    socket.on('connect', () => {
      console.log('Connected to Client')
      socket.emit('usertype', this.state.usertype)
    })
    this.setState({
      socket
    })
  }

  onSendMessage = (message) => {
    const messages = this.state.messagesmessage.push({
      text: message,
      usertype: this.state.client
    })
    this.setState({ messages: messages })
  }

  // setUser = (user) => {
  //   const socket = this.state.socket
  //   // const user = socket.id
  //   socket.emit('user connected', user)
  //   this.setState({
  //       user
  //   })
  // }

  onChangeHandler = (evt) => {
    evt.preventDefault()
    this.setState({
      message: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      message: ''
    })
    socket.emit('send message', this.state.message)
  }

  // disconnectHandler = () => {
  //   evt.preventDefault()
  //   socket.leave()
  // }

  render () {
    return (
      <>
        <h1>This is the chat component</h1>
        <h2>Messages:</h2>
        {this.state.messages.map((message, i) => {
          return <p key={i}>{message}</p>
        })}
        <div className='Message-content'>
          <input type="text" value={this.state.message} onChange={this.onChangeHandler}/>
          <button type="submit" onClick={this.onSubmit}>Send</button>
          <br />
        </div>
        {/* <button type="submit" onClick={this.disconnectHandler}>Disconnect</button> */}
      </>
    )
  }
}
