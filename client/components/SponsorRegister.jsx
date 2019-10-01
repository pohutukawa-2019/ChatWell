import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// import Button from './elements/Button'
import { isAuthenticated, register } from 'authenticare/client'

import { randomName, randomAvatar } from '../utilities'
import { setUsername } from '../actions/username'
import { GridForm, ColOne, ColTwo } from './Styled'
import Header from './Header'
import TitleArea from './elements/TitleArea'
import Footer from './Footer'
import Button from './elements/Button'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorRegister extends React.Component {
  state = {
    username: randomName(),
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = (event) => {
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(setUsername(this.state.username))
          this.props.history.push('/sponsor/guidance')
        }
      })
  }

  generateUsername = () => {
    this.setState({
      username: randomName()
    })
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <TitleArea />
        <br />
        <h3 style={{ textAlign: 'center' }}>Choose your nickname and password. You can also randomise a nickname by clicking the button below.</h3>

        <GridForm>
          <ColTwo
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}/>
          <ColTwo
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}/>

        </GridForm>
        <br />
        <Button style={{ fontFamily: 'Lato', fontWeight: 'bold' }} color="primary" name="generateUsername" value="generateUsername"
          onClick={ (e) => { this.generateUsername() }}>RANDOM NICKNAME</Button>
        <br />
        <Button color="primary" onClick={this.handleRegister} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button>
        <br />

        <br />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default connect()(SponsorRegister)
