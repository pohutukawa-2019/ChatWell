import React from 'react'
import { Link } from 'react-router-dom'

// import TopicListItem from './TopicListItem'

function ClientTopics (props) {
  return (
    <div>
      <h2>I want to talk about...</h2>
      {/* {props.topics.map(topic => {
            return <>
            <TopicListItem
            key={topic.id}
            topic={topic}/>
            </>
      })} */}
      <Link className='pure-button' to='/register'>Continue</Link>
    </div>
  )
}

export default ClientTopics
