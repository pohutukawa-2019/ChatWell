import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import HeaderTag from './elements/HeaderTag'

class Header extends React.Component {
  render () {
    return (
      <div>
        <HeaderTag style={{ color: '#090934', fontWeight: 'bold' }}>ChatWell</HeaderTag>
        <div className="w3-top">
          <div className="w3-bar" id="myNavbar">
            {/* <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="#" title="Toggle Navigation Menu">
            <i className="fa fa-bars"></i>
          </a> */}
            <a href="/" style={{ color: '#090934', fontWeight: 'bold' }} className="w3-bar-item w3-button">HOME</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
