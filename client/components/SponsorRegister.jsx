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
  primary: '#80ced6',
  secondary: '#4040a1',
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
      <div className="hero flex-center">
        <ThemeProvider theme={theme}>
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Enter your choice of Nickname in the box below, or Click to pick a random Nickname to use</TitleArea>
          <br />
          <h3 className="sponsor-font" style={{ textAlign: 'center', fontSize: '28px' }}>Choose your nickname and password. You can also randomise a nickname by clicking the button below.</h3>

          <div className="input">
            <input type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}/>

            <input type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}/>
            {(this.state.username === '') ? <p className="sponsor-font" style={{ textAlign: 'center' }}>If this field is left empty username defaults to 'Anonymous'</p> : null}
            <p className="sponsor-font" style={{ textAlign: 'center' }}>If the above field is left empty username defaults to 'Anonymous'</p>
          </div>
          <br />
          <Button style={{ fontFamily: 'Lato', fontWeight: 'bold' }} color="primary" name="generateUsername" value="generateUsername"
            onClick={ (e) => { this.generateUsername() }}>RANDOM NICKNAME</Button>
          <br />
          <Link to='/sponsor/guidance' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleRegister} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>REGISTER</Button></Link>
          <br />
          <br />
          <Footer />
        </ThemeProvider>
      </div>
    )
  }
}

export default connect()(SponsorRegister)
