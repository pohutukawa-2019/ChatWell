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
        
      (Disclaimer goes in here)
  
      <Link className='pure-button' to='/pair'>Continue</Link>
    </div>
  )
}

export default Guidance
