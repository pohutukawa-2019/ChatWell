import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTopics } from '../actions/topics'
import Topic from './Topic'

class SponsorTopics extends React.Component {
  state = {
    selectedTopics: []
  }

  componentDidMount () {
    this.props.getTopics()
  }

  toggleTopic = id => {
    let selection = []

    if (this.state.selectedTopics.includes(id)) {
      selection = this.state.selectedTopics.filter(topicId => topicId !== id)
    } else {
      selection = [...this.state.selectedTopics]
      selection.push(id)
    }

    this.setState({ selectedTopics: selection })
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
        <button>Register</button>
        <Link className='pure-button' to='/register'>Continue</Link>
        <br/>
        <Link className='pure-button' to='/'>Back to main</Link>
      </div>
    )
  }
}
//  onClick={this.props.history.push('/register')}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    pending: state.pending,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => dispatch(getTopics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorTopics)
