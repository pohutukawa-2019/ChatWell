  
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import H2 from './elements/H2'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

function Guidance (props) {
  return (
    <ThemeProvider theme={theme}>
      <H2>User Responsibility</H2>

      (Disclaimer goes in here)

      <Link to='/pair'><Button color="primary">CONTINUE</Button></Link>
      <br />
      <Link to='/'><Button color="secondary">BACK TO MAIN</Button></Link>
    </ThemeProvider>
  )
}

export default Guidance
