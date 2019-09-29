import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import H2 from './elements/H2'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class Header extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <H2>Chat Well</H2>
      </ThemeProvider>
    )
  }
}

export default Header
