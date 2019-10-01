import React from 'react'
import { Link } from 'react-router-dom'
import { styled, ThemeProvider } from 'styled-components'
import { logOff } from 'authenticare/client'
import Nav from './Nav'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import Button from './elements/Button'

// const NavGroup = styled.div`
//   float: right;
// `

// const NavLink = styled(Link)`
//   margin-right: 30px;
//   `

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SponsorGuidance () {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <h3>Sponsor Responsibility</h3>
      Thank you for offering to provide some support and guidance to a fellow human being! With luck, you'll make someone's day a little easier.
      <Link className='pure-button' to='/sponsor/topics'>Accept</Link>
    </ThemeProvider>
  )
}

export default SponsorGuidance
