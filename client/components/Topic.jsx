import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

export default function Topic ({ id, topic, toggleTopic }) {
  return (
    <li style={{ listStyleType: 'none' }}>
      <Checkbox
        value={id}
        onChange={() => toggleTopic(id)}
        inputProps={{ 'aria-label': topic }}/>
      {topic}
    </li>
  )
}