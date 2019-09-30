import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Footer from './Footer'
import Header from './Header'
import TitleArea from './elements/TitleArea'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SponsorGuidance () {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <TitleArea />
      <br />
      <h3 style={{ textAlign: 'center' }}>Sponsor Guidance</h3>
      <p style={{ textAlign: 'center' }}>Thank you for offering to provide some support and guidance to a fellow human being! With luck, you'll make someone's day a little easier.</p>
      {' '}
      <br />
      <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
      {' '}
      <br />
      <Link to='/sponsor/pair' style={{ textDecoration: 'none' }}><Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
      <br />
      <Footer />
    </ThemeProvider>
  )
}

export default SponsorGuidance
