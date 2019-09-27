import React from 'react'

class MessageHandler extends React.Component {
  render () {
    const { messages } = this.props
    return (
      <ul className='Messages-list'>
        {messages.map((m, index) => this.renderMessage(m, index))}
      </ul>
    )
  }

  renderMessage (message, index) {
    console.log(message)
    const { member, text } = message
    return (
      <li className = {message} key = {index}>
        <span
          className='avatar'
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className='Message-content'>
          <div className='username'>
            {member.clientData.username}
          </div>
          <div className='text'>{text}</div>
        </div>
      </li>
    )
  }
}
export default MessageHandler
