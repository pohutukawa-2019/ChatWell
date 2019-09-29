import React from 'react'

import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import GetHelpButton from './GetHelpButton'
// import ToHelpButton from './ToHelpButton'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Chat Well</h1>
          <Link className='pure-button' to='/topics'>I need help </Link>
          {' '}
          <Link className='pure-button' to='/sponsor/topics'>I want to help</Link>
        </div>
      </div>
    )
  }
}

export default App
