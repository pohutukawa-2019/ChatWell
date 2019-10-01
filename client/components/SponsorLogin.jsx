import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'

import Button from './elements/Button'
import Header from './Header'

const theme = {
  primary: '#618685',
  secondary: '#4040a1',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorLogin extends React.Component {
  render () {
    return (
    <>
        <ThemeProvider theme={theme}>
          <Header />
          <h2 style={{ textAlign: 'center' }}>Already helping out?</h2>
          <Link to='/sponsor/signin' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>Sign in</Button></Link>
          <h3 style={{ textAlign: 'center' }}>Or create an account:</h3>
          <Link to='/sponsor/signup' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>Register</Button></Link>
          <h3 style={{ textAlign: 'center' }}>Or continue without creating an account:</h3>
          <Link to='/sponsor/register' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>Continue</Button></Link>
        </ThemeProvider>
    </>
    )
  }
}

export default SponsorLogin
