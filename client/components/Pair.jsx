import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import ChatRoom from './ChatRoom'

class Pair extends React.Component {
  render () {
    return (
      <>
        <h2>Pair with someone</h2>
        <br/>
        <Link className='pure-button' to='/'>Back to main</Link>
      {/* the chat room goes here */}
      </>
    )
  }
}

export default connect()(Pair)
