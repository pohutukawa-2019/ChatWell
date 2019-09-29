import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import H2 from './elements/H2'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  margin: 'auto',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function SponsorGuidance (props) {
  return (
    <ThemeProvider theme={theme}>
      <H2>User Responsibility</H2>
      Thank you for offering to provide some support and guidance to a fellow human being! With luck, you'll make someone's day a little easier.
      (Disclaimer goes in here)
      <Link to='/pair'><Button color="primary">CONTINUE</Button></Link>
    </ThemeProvider>
  )
}

export default SponsorGuidance
