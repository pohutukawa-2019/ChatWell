import React from 'react'
import { Link } from 'react-router-dom'

function Guidance (props) {
  return (
    <div>
      <h2>User Responsibility</h2>
      This app is intended for support purposes only. It is not intended for use in the diagnosis of conditions or for providing professional advice…… Please seek the advice of healthcare professionals if you are in need. (Provide helpline numbers and contacts)
      <Link className='pure-button' to='/pair'>Continue</Link>
    </div>
  )
}

export default Guidance
