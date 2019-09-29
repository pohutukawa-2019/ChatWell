import React from 'react'
import { connect } from 'react-redux'
import ChatRoom from './ChatRoom'
import H2 from './elements/H2'

class Pair extends React.Component {
  render () {
    return (
      <>
      <H2>Pair with someone</H2>
      <ChatRoom />
      </>
    )
  }
}

export default connect()(Pair)
