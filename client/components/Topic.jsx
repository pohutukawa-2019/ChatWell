import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

export default function Topic ({ id, topic, toggleTopic }) {
  return (
    <li style={{ listStyleType: 'none' }}>

      {/* <li className="flex-box" style={{ listStyleType: 'none' }}> */}

      <Checkbox
        value={id}
        onChange={() => toggleTopic(topic)}
        inputProps={{ 'aria-label': topic }}/>
      {topic}
    </li>
  )
}
