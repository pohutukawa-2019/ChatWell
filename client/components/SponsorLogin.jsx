import React from 'react'
import { Link } from 'react-router-dom'

import Button from './elements/Button'

class SponsorLogin extends React.Component {

  render () {
    return (
    <>
    <h2>Already helping out?</h2>
    <Link to='/sponsor/signin' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>Sign in</Button></Link>
    <h3>Or create an account:</h3>
    <Link to='/sponsor/register' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>Register</Button></Link>
    </>
    )
  }
}

export default SponsorLogin
