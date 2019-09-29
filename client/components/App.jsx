import React from 'react'

import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import GetHelpButton from './GetHelpButton'
// import ToHelpButton from './ToHelpButton'
import { getUserType } from '../actions/typeOfUser'

class App extends React.Component {
  state = {
    userType: ''
  }

  componentDidMount () {
    this.props.getUserType()
  }

  handleClient = () => {
    this.props.getUserType(this.state)
    this.setState({
      userType: 'client'
    })
  }

  handleSponsor = () => {
    this.props.getUserType(this.state)
    this.setState({
      userType: 'sponsor'
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Chat Well</h1>
          <Link className='pure-button' to='/topics' onClick={this.handleClient}>I need help </Link>
          {' '}
          <Link className='pure-button' to='/sponsor/topics' onClick={this.handleSponsor}>I want to help</Link>
        </div>
      </div>
    )
  }
}

export default App
