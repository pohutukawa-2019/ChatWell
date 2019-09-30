import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'

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
      <div>
        {error && <div>{error}</div>}
        <h2>I can help with...</h2>
        <ul>
          {topics.map(topic =>
            <Topic
              key={topic.id}
              topic={topic.topic}
              id={topic.id}
              toggleTopic={this.toggleTopic} />
          )}
        </ul>
        {/* <Link className='pure-button' to='/register'>Continue</Link> */}
        <Link className='pure-button' to='/'>Back to main</Link>
        {' '}
        <button className='pure-button' onClick={this.handleContinue}>Continue</button>
      </div>
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
