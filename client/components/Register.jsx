import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
// import Utilities from './Utilities'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class Register extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <h3>Create Account</h3>
        <h3>Create a username and password</h3>
        <label>Username</label>
        {/* add username input field below: */}
        <input type = "text"
          id = "client-username"
          value = "your username" />
        <label>Password</label>
        <input type = "password"
          id = "client-password"
          value = "your secret password" />
        <h3>OR</h3>
        <h3>Auto Generate Username</h3>
        {/* link to Utilities component to autogenerate username: */}
        {/* <Utilities /> */}
        {/* This takes you to the user responsibility/guidance page: */}
        <Link to='/guidance'><Button color="primary">CONTINUE</Button></Link>
        <br />
        <Link to='/'><Button color="secondary">BACK TO MAIN</Button></Link>
      </ThemeProvider>
    )
  }
}

export default connect()(Register)
