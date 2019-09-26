import React from 'react'
import { Link } from 'react-router'

import TopicsList from './TopicsList'

function SponsorTopics (props) {
  return (
    <div>
      <h2>I want to help with...</h2>
      {props.topics.map(topic => {
        return <>
            <TopicsList
              key={topic.id}
              topic={topic}/>
            </>
      })}
      <Link className='pure-button' to={'/register'}>Continue</Link>
    </div>
  )
}
export default SponsorTopics
