import React from 'react'
import { Link } from 'react-router-dom'

// import TopicListItem from './TopicListItem'

function Guidance (props) {
  return (
    <div>
      <h2>User Responsibility</h2>
      {/* {props.topics.map(topic => {
        return <>
         <TopicListItem
           key={topic.id}
           topic={topic}/>
            </>
      })} */}
        
    This app is intended for support purposes only. It is not intended for use in the diagnosis of conditions or for providing professional advice - remember you are speaking to another human who has been through a lot, so be kind. If you are at risk in any way, please seek the advice of healthcare professionals. (Provide helpline numbers and contacts)

  
      <Link className='pure-button' to='/pair'>Continue</Link>
    </div>
  )
}

export default Guidance
