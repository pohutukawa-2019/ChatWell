import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Div from './elements/Div'
import TitleArea from './elements/TitleArea'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#82b74b;',
  secondary: '#82b74b',
  align: 'middle',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class Homepage extends React.Component {
  state = {
    userType: ''
  }

  // componentDidMount () {
  //   this.dispatch(userTypeSelected())
  // }

  handleClient = () => {
    // this.setState({
    //   userType: 'client'
    // }, () => {
    this.props.dispatch(getUserType('client'))
    // })
  }

  handleSponsor = () => {
    // this.setState({
    //   userType: 'sponsor'
    // }, () => {
    this.props.dispatch(getUserType('sponsor'))
    // })
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <div style={{height: '100vh', overflow: 'hidden'}}>
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>If you think you are experiencing a mental health problem chat to someone who can help here.</TitleArea>
          <Div>
            <br></br>
            <Link to='/topics' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleClient} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I NEED HELP</Button></Link>
            <br style={{margin: '100px'}} />
            <Link to='/sponsor/login' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I WANT TO HELP</Button></Link>
          </Div>
          <Footer />
        </div>
        
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType
  }
}

export default connect(mapStateToProps)(Homepage)
