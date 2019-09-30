import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
// import Utilities from './Utilities'
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
    username: ''
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
      <button type="button" name="generateUsername" value="generateUsername"
        onClick={ (e) => { this.generateUsername() }}>Random Nickname</button>
      <input type="text" value={this.state.username} onChange={this.handleChange}/>
      <Link className='pure-button' to='/'>Back to main</Link>
      <button className='pure-button' onClick={this.handleContinue}>Continue</button>
    </GridForm>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName })
  }
}

export default connect(mapDispatchToProps)(SponsorRegister)
