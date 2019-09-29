import React from 'react'
// import ChatRoom from './ChatRoom'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import GetHelpButton from './GetHelpButton'
// import ToHelpButton from './ToHelpButton'
// import ChatRoom from './ChatRoom'

class App extends React.Component {
  render () {
    return (
        <>
          <h1>Chat Well</h1>
          <Link className='pure-button' to='/topics'>I want to get help </Link>
          <br/>
          <Link className='pure-button' to='/sponsor/topics'>I want to help</Link>
          {/* <ChatRoom /> */}
        </>
    )
  }
}

export default App
