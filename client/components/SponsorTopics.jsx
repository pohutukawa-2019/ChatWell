import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import H2 from './elements/H2'
import { getTopics } from '../actions/topics'
import Topic from './Topic'
// import TopicListItem from './TopicListItem'
const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class SponsorTopics extends React.Component {
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
      <ThemeProvider theme={theme}>
        {error && <div>{error}</div>}
        <H2>I can help with...</H2>
        <ul>
          {topics.map(topic =>
            <Topic key={`${topic.id}`} id={topic.id} topic={topic} />)}
        </ul>
        <Link className='pure-button' to='/register'><Button color="primary">CONTINUE</Button></Link>
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

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => dispatch(getTopics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorTopics)
