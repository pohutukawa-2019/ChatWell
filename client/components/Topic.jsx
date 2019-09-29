import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

export default function Topic ({ topic: { topic }, id }) {
  return (
    <>
      <li style={{ listStyleType: 'none' }}>
        <Checkbox
          value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A'
          }}/> {topic}
      </li>
    </>
  )
}
