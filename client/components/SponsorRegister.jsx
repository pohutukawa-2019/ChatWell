import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import Utilities from './Utilities'

class SponsorRegister extends React.Component {
  render () {
    return (
      <>
      <h2>Create a username and password</h2>
       <label>Username</label>
  {/* add username input field below: */}
        <input type = "text"
          id = "sponsor-username"
          value = "your username" />
       <label>Password</label>
        <input type = "password"
          id = "sponsor-password"
          value = "your secret password" />
       <h2>OR</h2>
       <h3>Auto Generate Username</h3>
 {/* link to Utilities component to autogenerate username: */}
       {/* <Utilities /> */}
 {/* This takes you to the user responsibility/guidance page: */}
     {' '}
    <Link className='pure-button' to='/'>Back to main</Link>
       <Link className='pure-button' to='/sponsor/pair'>Continue</Link>
       {' '}
      {/* <Link className='pure-button' to='/guidance'>Accept</Link> */}
      </>
    )
  }
}

export default connect()(SponsorRegister)
