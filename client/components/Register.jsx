import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { randomName, randomAvatar } from '../utilities'
import { GridForm, ColOne, ColTwo, Button } from './Styled'

class Register extends React.Component {
    state = {
      user: {
        avatar: '',
        username: ''
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit (e) {
      e.preventDefault()
      this.setState({
        username: randomName(),
        avatar: randomAvatar()
      })
    }

    render () {
      return (
      <>
      <ColOne>Create a username and password</ColOne>
      <GridForm>
        <ColOne>Username</ColOne>
        {/* add username input field below: */}
        <ColTwo name = "username"
          value = 'username'
          onChange={ (e) => { this.handleChange(e) }} />
        <ColOne>Password</ColOne>
        <ColTwo name = 'password'
          value = 'password'
          onChange={ (e) => { this.handleChange(e) }} />
        <Button onClick={ (e) => { this.onSubmit(e) }}>Register</Button>
        <h2>OR</h2>
        <h3>Auto Generate Username</h3>
        <input type="submit" name="guestLogin" value="Guest User "
          onClick={ (e) => { this.onSubmit(e) }}></input>
        {/* This takes you to the user responsibility/guidance page: */}
        <Link className='pure-button' to='/guidance'>Guest</Link>
      </GridForm>
      </>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName }),
    avatar: () => dispatch({ randomAvatar })
  }
}

export default connect(mapDispatchToProps)(Register)
