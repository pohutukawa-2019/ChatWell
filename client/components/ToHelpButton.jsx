import React from 'react'

class ToHelpButton extends React.Component {

  state = {
    sponsor: false,
    client: false
  }

  toHelp = (bool) => {
    //This to go toHelp function on api
    this.setState({ sponsor:true })
  }

  render () {
    return (
      <>
        <button onClick={() => { this.toHelp(true) }}>I want to help</button>
      </>
    )
  }
}

export default ToHelpButton
