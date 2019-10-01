import React from 'react'
import { Link } from 'react-router-dom'

import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import HeaderTag from './elements/HeaderTag'

class Header extends React.Component {
  render () {
    return (
      <div>
        <HeaderTag style={{ color: '#090934', fontWeight: 'bold' }}>ChatWell</HeaderTag>
        <div className="w3-top">
          <div className="w3-bar" id="myNavbar">
            <a href="/" style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hover-red">HOME</a>
            <IfAuthenticated>
              <Link to='/' data-testid='logoff' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red"
                onClick={logOff}>LOG OFF</Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to='/sponsor/register' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red" data-testid='register'>REGISTER</Link>
              <Link to='/sponsor/signin' style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red" data-testid='signin'>SIGN IN</Link>
            </IfNotAuthenticated>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
