import React from 'react'

export default function Topic ({ topic: { topic }, id }) {
  return (
    <li>
      {id} {topic}
    </li>
  )
}
