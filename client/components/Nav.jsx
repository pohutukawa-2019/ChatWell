import React from 'react'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav () {
  return (
    <React.Fragment>
      <Link to='/'>Home</Link>
      <IfAuthenticated>
        <Link to='#' data-testid='logoff'
          onClick={logOff}>Log off</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='/sponsor/register' data-testid='register'>Register</Link>
        <Link to='/sponsor/signin' data-testid='signin'>Sign in</Link>
      </IfNotAuthenticated>
    </React.Fragment>
  )
}
