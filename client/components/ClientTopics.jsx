import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTopics } from '../actions/topics'
import Topic from './Topic'

class ClientTopics extends React.Component {
  componentDidMount () {
    this.props.getTopics()
  }
  render () {
    const { topics, pending, error } = this.props
    console.log(this.props)
    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <div>
        {error && <div>{error}</div>}
        <h2>I need help with...</h2>
        <ul>
          {topics.map(topic =>
            <Topic key={`${topic.id}`} id={topic.id} topic={topic} />)}
        </ul>
        <Link className='pure-button' to='/register'>Continue</Link>
        <br/>
        <Link className='pure-button' to='/'>Back to main</Link>
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

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => dispatch(getTopics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientTopics)