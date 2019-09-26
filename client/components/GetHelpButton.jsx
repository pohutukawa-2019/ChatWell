import React from 'react'

import { getHelp } from '../actions'
import { connect } from 'react-redux'
class GetHelpButton extends React.Component {

  onClickHandler = (bool) => {
    this.props.dispatch(getHelp(true))
    //TODO: another function to render next page
  }

  render () {
    return (
      <>
        <button onClick={() => { this.onClickHandler(true) }}>I want to get help</button>
      </>
    )
  }
}

export default connect()(GetHelpButton)
