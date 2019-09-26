import React from 'react'
import { Link } from 'react-router'

import TopicListItem from './TopicListItem'

function SponsorTopics (props) {
  return (
    <div>
      <h2>I can help with...</h2>
      {props.topics.map(topic => {
        return <>
         <TopicListItem
           key={topic.id}
           topic={topic}/>
            </>
      })}
      <Link className='pure-button' to={'/register'}>Continue</Link>
    </div>
  )
}
export default SponsorTopics
