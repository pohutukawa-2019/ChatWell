import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { isAuthenticated, register } from 'authenticare/client'

import Button from './elements/Button'
import { randomName, randomAvatar } from '../utilities'
import { setUsername } from '../actions/username'
import { GridForm, ColOne, ColTwo, Button2 } from './Styled'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorRegister extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount () {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleRegister = () => {
    this.props.dispatch(setUsername(this.state.username))
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push('/')
        }
      })
      this.props.history.push('/guidance')
  }

  handleContinue = () => {
    this.props.dispatch(setUsername(this.state.username))
    this.props.history.push('/guidance')
  }

  generateUsername = () => {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  render () {
    return (
    <>
    <GridForm>
      <h3>Write a nickname for yourself or click the button below to randomise one:</h3>
      <button type="button" name="username" value={this.state.username}
        onClick={ (e) => { this.generateUsername() }}>Random Nickname</button>

      <ColTwo name='username'
        placeholder='Username'
        value={this.state.username}
        onChange={this.handleChange}
      />

      <ColTwo name='password' type='password'
        placeholder='Password'
        onChange={this.handlePasswordChange}
      />

      {/* <input type="text" value={this.state.username} onChange={this.handleChange}/>
      <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/> */}

      <Button type='button' onClick={this.handleRegister}>Register</Button>
      <Link className='pure-button' to='/'>Back to main</Link>

      <button className='pure-button' onClick={this.handleContinue}>Continue</button>
    </GridForm>
      </>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: {
      username: 'username',
      password: 'password'
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName })
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(SponsorRegister)
