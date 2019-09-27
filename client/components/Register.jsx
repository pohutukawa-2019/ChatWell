import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import UsernameGenerator from './UsernameGenerator'

class Register extends React.Component {
  render () {
    return (
      <>
      <h2>Create a username and password</h2>
       <label>Username</label>
  {/* add username input field below: */}
        <input type = "text"
          id = "client-username"
          value = "your username" />
       <label>Password</label>
        <input type = "password"
          id = "client-password"
          value = "your secret password" />
       <h2>OR</h2>
       <h3>Auto Generate Username</h3>
 {/* link to Utilities component to autogenerate username: */}
       {/* <UsernameGenerator /> */}
 {/* This takes you to the user responsibility/guidance page: */}
       <Link className='pure-button' to='/guidance'>Continue</Link>
      </>
    )
  }
}

export default connect()(Register)
