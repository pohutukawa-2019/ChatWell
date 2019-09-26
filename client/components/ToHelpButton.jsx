import React from 'react'

// import { toHelp } from '../actions'
import { connect } from 'react-redux'
class ToHelpButton extends React.Component {

  // onClickHandler = (bool) => {
  //   this.props.dispatch(toHelp(true))
  //   //TODO: another function to render next page
  // }
  render () {
    return (
      <>
        {/* <button onClick={() => { this.onClickHandler(true) }}>I want to help</button> */}
        <Link className='pure-button' to={'/sponsortopics'}>I want to help</Link>
      </>
    )
  }
}

export default connect()(ToHelpButton)
