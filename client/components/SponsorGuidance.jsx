import React from 'react'
import { Link } from 'react-router-dom'
import { styled, ThemeProvider } from 'styled-components'
import { logOff } from 'authenticare/client'
import Nav from './Nav'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Footer from './Footer'
import Header from './Header'
import TitleArea from './elements/TitleArea'
const theme = {
  primary: '#618685',
  secondary: '#4040a1',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SponsorGuidance () {
  return (
    <div className="hero flex-center">
      <ThemeProvider theme={theme}>
        <Header />
        <TitleArea />
        <br />
        <h3 className="sponsor-font" style={{ textAlign: 'center', fontSize: '28px' }}>Sponsor Guidance</h3>
        <p className="sponsor-font" style={{ textAlign: 'center' }}>Thank you for offering to provide some support and guidance to a fellow human being!</p> 
        <p className="sponsor-font" style={{ textAlign: 'center' }}>With luck, you'll make someone's day a little easier.</p>
        {' '}
        <br />
        <Link to='/sponsor/pair' style={{ textDecoration: 'none' }}><Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
        <br />
        <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
        <br />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default SponsorGuidance
