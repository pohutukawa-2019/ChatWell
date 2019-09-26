import React from 'react'

class GetHelpButton extends React.Component { 

  state = {
    sponsor: false,
    client: false
  }

  getHelp = (bool) => {
    //This to go getHelp function on api
    this.setState({ client: true })
  }

  render () {
    return (
      <>
        <button onClick={() => { this.getHelp(true) }}>I want to get help</button>
      </>
    )
  }
}

export default GetHelpButton
