import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Pair extends React.Component {
  render () {
    return (
      <>
      <h2>Pair with someone</h2>
      {/* the chat room goes here */}
      </>
    )
  }
}

export default connect()(Pair)
