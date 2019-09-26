import React from 'react'

import { getHelp } from '../actions'
import { connect } from 'react-redux'
class GetHelpButton extends React.Component {
  state = {
    sponsor: false,
    client: false
  }

  render () {
    return (
      <>
        {/* <button onClick={() => { this.getHelp(true) }}>I want to get help</button> */}
        <button onClick={() => { this.props.dispatch(getHelp(true)) }}>I want to get help</button>
      </>
    )
  }
}

// export default GetHelpButton
export default connect()(GetHelpButton)
