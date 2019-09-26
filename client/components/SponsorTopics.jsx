import React from 'react'

import TopicsList from './TopicsList'

function SponsorTopics (props) {
   return (
      <div>
         <h2>I want to talk about...</h2>
         {props.topics.map(topic => {
            return <>
            <TopicsList
            key={topic.id}
            topic={topic}/>
            </>
         })}  
         <Link 
         className='pure-button'
         to={'/register'}>Continue</Link>
      </div>
   )
} 
 export default SponsorTopics
