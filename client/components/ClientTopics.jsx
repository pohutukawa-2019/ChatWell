import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from './elements/Button'
import { getTopics, saveTopics } from '../actions/topics'
import Topic from './Topic'
import { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import TitleArea from './elements/TitleArea'

const theme = {
  primary: '#405d27',
  secondary: '#82b74b',
  align: 'middle',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}
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

    return (
      <div className="hero-client flex-center">
        <ThemeProvider theme={theme}>
          {error && <div>{error}</div>}
          <Header />
          <TitleArea />
          <br />
          <h3 className="client-font" style={{ textAlign: 'center', fontSize: '28px' }}>I need help with...</h3>
          <h3 className="client-font" style={{ textAlign: 'center', fontSize: '21px' }}>(Select all that apply)</h3>
          <ul className="client-font" style={{ textAlign: 'center', fontSize: '18px' }}>
            {topics.map(topic =>
              <Topic
                key={topic.id}
                topic={topic.topic}
                id={topic.id}
                toggleTopic={this.toggleTopic} />
            )}
          </ul>
          <Button onClick={this.handleContinue} color="primary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>CONTINUE</Button>
          {' '}
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          <br />
          <Footer />
        </ThemeProvider>
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

export default connect(mapStateToProps)(ClientTopics)
