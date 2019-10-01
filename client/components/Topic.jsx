import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

export default function Topic ({ id, topic, toggleTopic }) {
  return (
    <li className="flex-container" style={{ listStyleType: 'none' }}>
      <Checkbox
        value={id}
        onChange={() => toggleTopic(topic)}
        inputProps={{ 'aria-label': topic }}/>
      {topic}
    </li>
  )
}
