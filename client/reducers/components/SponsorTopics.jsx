import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'

import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorTopics extends React.Component {
  state = {
    selectedTopics: []
  }

  componentDidMount () {
    this.props.dispatch(getTopics())
  }

  toggleTopic = (topic) => {
    let selection = []

    if (this.state.selectedTopics.includes(topic)) {
      selection = this.state.selectedTopics.filter(t => t !== topic)
    } else {
      selection = [...this.state.selectedTopics]
      selection.push(topic)
    }

    this.setState({ selectedTopics: selection })
  }

  handleContinue = () => {
    this.props.dispatch(saveTopics(this.state.selectedTopics))
    this.props.history.push('/sponsor/guidance')
  }

  render () {
    const { topics, pending, error } = this.props
    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <ThemeProvider theme={theme}>
        {error && <div>{error}</div>}
        <h3>I can help with...</h3>
        <ul>
          {topics.map(topic =>
            <Topic
              key={topic.id}
              topic={topic.topic}
              id={topic.id}
              toggleTopic={this.toggleTopic} />
          )}
        </ul>
        <Link className='pure-button' to='/register'><Button color="primary" onClick={this.handleContinue}>CONTINUE</Button></Link>
        <br />
        <Link to='/'><Button color="secondary">BACK TO MAIN</Button></Link>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    pending: state.pending,
    error: state.error
  }
}

export default connect(mapStateToProps)(SponsorTopics)
