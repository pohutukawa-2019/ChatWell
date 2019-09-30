import React from 'react'
import { connect } from 'react-redux'
import ChatRoom from './ChatRoom'

class Pair extends React.Component {
  render () {
    return (
      <>
        <ChatRoom />
      </>
    )
  }
}
export default connect()(Pair)
