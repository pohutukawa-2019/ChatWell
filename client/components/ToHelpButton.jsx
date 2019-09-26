import React from 'react'

import { toHelp } from '../actions'
import { connect } from 'react-redux'
class ToHelpButton extends React.Component {
  state = {
    sponsor: false,
    client: false
  }

  render () {
    return (
      <>
        {/* <button onClick={() => { this.toHelp(true) }}>I want to help</button> */}
        <button onClick={() => { this.props.dispatch(toHelp(true)) }}>I want to get help</button>
      </>
    )
  }
}

// export default ToHelpButton
export default connect()(ToHelpButton)
