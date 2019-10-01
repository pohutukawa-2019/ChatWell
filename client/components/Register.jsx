import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { randomName, randomAvatar } from '../utilities'
import { ThemeProvider } from 'styled-components'
import { setUsername } from '../actions/username'
// import { GridForm, ColOne, ColTwo,  } from './Styled'
import Button from './elements/Button'
import Header from './Header'
import TitleArea from './elements/TitleArea'
import Footer from './Footer'

const theme = {
  primary: '#405d27',
  secondary: '#82b74b',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}
class Register extends React.Component {
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
    // this.props.history.push('/guidance')
  }

  generateUsername = () => {
    this.setState({
      username: randomAvatar() + ' ' + randomName()
    })
  }

  render () {
    return (
      <div className="hero-client flex-center">
        <ThemeProvider theme={theme}>
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Write a nickname for yourself or click the button below to randomise one:</TitleArea>
          <br />
          <Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }} name="generateUsername" value="generateUsername"
            onClick={ (e) => { this.generateUsername() }}>RANDOM NICKNAME</Button>
          <br />
          <div className="input">
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </div>
          {(this.state.username === '') ? <p>If this field is left empty username defaults to 'Anonymous'</p> : null}
          <br />
          <Link to='/guidance' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleContinue} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          <br />
          <Footer />
        </ThemeProvider>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    username: () => dispatch({ randomName })
  }
}

export default connect()(Register)
