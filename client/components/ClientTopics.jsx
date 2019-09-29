import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import H2 from './elements/H2'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class ClientTopics extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <H2>I want to talk about...</H2>
        {/* {props.topics.map(topic => {
            return <>
            <TopicListItem
            key={topic.id}
            topic={topic}/>
            </>
      })} */}
        <Link to='/register'><Button color="primary">CONTINUE</Button></Link>
      </ThemeProvider>
    )
  }
}

export default ClientTopics
