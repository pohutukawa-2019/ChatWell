import React from 'react'
// import ChatRoom from './ChatRoom'
import { Link } from 'react-router-dom'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  align: 'middle',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Link to='/topics'><Button color="primary">I WANT TO GET HELP</Button></Link>
        <br></br>
        <br></br>
        <Link to='/sponsor/topics'><Button color="secondary">I WANT TO HELP</Button></Link>
        {/* <ChatRoom /> */}
      </ThemeProvider>
    )
  }
}

export default App