import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
<<<<<<< HEAD
import Button from './elements/Button'
import { isAuthenticated, register } from 'authenticare/client'
// import Utilities from './Utilities'
=======
>>>>>>> a729de54ca1998b59af488af106b2ecd38791c53
import { randomName, randomAvatar } from '../utilities'
import { setUsername } from '../actions/username'
// import { GridForm, ColOne, ColTwo } from './Styled'
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

  handleRegister = (event) => {
    event.preventDefault()
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(setUsername(this.state.username))
          this.props.history.push('/guidance')
        }
      })
  }

  generateUsername = () => {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  render () {
    return (
      // <GridForm>
      <ThemeProvider theme={theme}>
        <Header />
        <TitleArea />
        <br />
        <h3 style={{ textAlign: 'center' }}>Click on the below button to pick a random Nickname to use</h3>

        <Button style={{ fontFamily: 'Lato', fontWeight: 'bold' }} color="primary" name="generateUsername" value="generateUsername"
          onClick={ (e) => { this.generateUsername() }}>RANDOM NICKNAME</Button>
        <br />
        <div className="input">
          <input type="text" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <br />
        <Link to='/sponsor/guidance' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleContinue} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
        <br />
        <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
        <br />
        <Footer />
      </ThemeProvider>
      // </GridForm>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName })
  }
}

export default connect(mapDispatchToProps)(SponsorRegister)
