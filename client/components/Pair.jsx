import React from 'react'
import { connect } from 'react-redux'

import ChatRoom from './ChatRoom'

class Pair extends React.Component {
  render () {
    return (
      <>
      <h2>Pair with someone</h2>
      <ChatRoom />
      </>
    )
  }
}

export default connect()(Pair)
