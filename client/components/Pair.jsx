import React from 'react'
import { connect } from 'react-redux'
import ChatRoom from './ChatRoom'

class Pair extends React.Component {
  render () {
    return (
      <>
      <h3>Pair with someone</h3>
      <ChatRoom />
      </>
    )
  }
}
export default connect()(Pair)
