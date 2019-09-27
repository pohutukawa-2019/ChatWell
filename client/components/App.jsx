import React from 'react'
// import ChatRoom from './ChatRoom'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
        <>
          <h1>Chat Well</h1>
          <Link className='pure-button' to='/topics'>I want to get help </Link>
          <br></br>
          <Link className='pure-button' to='/sponsor/topics'>I want to help</Link>
          {/* <ChatRoom /> */}
        </>
    )
  }
}

export default App
