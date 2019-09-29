import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import ChatRoom from './ChatRoom'

class Pair extends React.Component {
  render () {
    return (
      <>
        <ChatRoom />
        <br/>
        <Link className='pure-button' to='/'>Back to main</Link>
      </>
    )
  }
}

export default connect()(Pair)
