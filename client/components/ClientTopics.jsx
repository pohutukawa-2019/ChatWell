import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// import { fetchTopics } from '../actions'
import Button from './elements/Button'
import Checkbox from './Checkbox'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  alert: 'yellow',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'

class ClientTopics extends React.Component {
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
    this.props.history.push('/register')
  }

  render () {
    const { topics, pending, error } = this.props
    if (pending) {
      return <div>LOADING...</div>
    }
  }
}


    return (
      <div>
        {error && <div>{error}</div>}
        <h2>I need help with...</h2>
        <ul>
          {topics.map(topic =>
            <Topic
              key={topic.id}
              topic={topic.topic}
              id={topic.id}
              toggleTopic={this.toggleTopic} />
          )}
        </ul>
        <Link className='pure-button' to='/'>Back to main</Link>
        {' '}
        <button className='pure-button' onClick={this.handleContinue}>Continue</button>
      </div>
    )


createCheckbox = option => (
  <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
  />
)

createCheckboxes = () => topics.map(this.createCheckbox)

render () {
  return (
    <ThemeProvider theme={theme}>
      <h2>I want to talk about...</h2>
      {/* Using a checklist for now, until the TopicListItem is ready to go. */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
              <button type="submit" className="btn btn-primary" onClick={() => this.props.dispatch(fetchTopics(this.state.isSelected))}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* {props.topics.map(topic => {
              return <>
              <TopicListItem
              key={topic.id}
              topic={topic}/>
              </>
        })} */}
      <Link to='/register'><Button color="primary">CONTINUE</Button></Link>
      <br />
      <Link to='/'><Button color="secondary">BACK TO MAIN</Button></Link>
    </ThemeProvider>
  )
}


const mapStateToProps = state => {
  return {
    topics: state.topics
  }
}

export default connect(mapStateToProps)(ClientTopics)
