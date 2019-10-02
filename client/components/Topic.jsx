import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

export default function Topic ({ id, topic, toggleTopic }) {
  return (
    <li style={{ listStyleType: 'none' }}>
      <GreenCheckbox
        value={id}
        onChange={() => toggleTopic(topic)}
        inputProps={{ 'aria-label': topic }}
        color="primary"/>
      {topic}
    </li>
  )
}
