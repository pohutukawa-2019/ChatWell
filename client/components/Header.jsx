import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import HeaderTag from './elements/HeaderTag'

class Header extends React.Component {
  render () {
    return (
      <div className="w3-top">
        <div className="w3-bar" id="myNavbar">
          <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="#" title="Toggle Navigation Menu">
            <i className="fa fa-bars"></i>
          </a>
          <a href="/" className="w3-bar-item w3-button">HOME</a>
          <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
          </a>
        </div>
        <HeaderTag>ChatWell</HeaderTag>
      </div>
    )
  }
}

export default Header
