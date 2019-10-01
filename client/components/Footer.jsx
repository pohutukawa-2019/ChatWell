import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <>
      <footer className="w3-center w3-black w3-padding-64">
        <div className="w3-xlarge w3-section">
          <i className="fa fa-facebook-official w3-hover-opacity" style={{ color: '#2a6592' }}></i>
          <i className="fa fa-instagram w3-hover-opacity" style={{ color: '#2a6592' }}></i>
          <i className="fa fa-snapchat w3-hover-opacity" style={{ color: '#2a6592' }}></i>
          <i className="fa fa-pinterest-p w3-hover-opacity" style={{ color: '#2a6592' }}></i>
          <i className="fa fa-twitter w3-hover-opacity" style={{ color: '#2a6592' }}></i>
          <i className="fa fa-linkedin w3-hover-opacity" style={{ color: '#2a6592' }}></i>
        </div>
      </footer>
      </>
    )
  }
}

export default Footer
