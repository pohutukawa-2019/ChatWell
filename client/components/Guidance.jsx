import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Footer from './Footer'
import Header from './Header'
import TitleArea from './elements/TitleArea'

// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#009999',
  secondary: '#82b74b',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function Guidance (props) {
  return (
    <div className="hero-client flex-center">
      <ThemeProvider theme={theme}>
        <div style={{ height: '100vh', overflow: 'hidden' }}>

          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>User Responsibility</TitleArea>
          <br />
          <p className="client-font" style={{ textAlign: 'center' }}>
        This app is intended for support purposes only. It is not intended for use in the diagnosis of conditions or for providing professional advice - remember you are speaking to another human who has been through a lot, so be kind. If you are at risk in any way, please seek the advice of healthcare professionals. (Provide helpline numbers and contacts)
          </p>
          {' '}
          <Link to='/pair' style={{ textDecoration: 'none' }}><Button color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button></Link>
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          <br />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Guidance
