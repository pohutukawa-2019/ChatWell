import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import GetHelpButton from './GetHelpButton'
// import ToHelpButton from './ToHelpButton'
import { userTypeSelected } from '../actions/typeOfUser'

class App extends React.Component {
  state = {
    userType: []
  }

  componentDidMount () {
    this.props.dispatch(userTypeSelected())
  }

  handleClient = () => {
    this.props.dispatch(userTypeSelected(this.state))
    this.setState({
      userType: 'client'
    })
  }

  handleSponsor = () => {
    this.props.dispatch(userTypeSelected(this.state))
    this.setState({
      userType: 'sponsor'
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Chat Well</h1>
          <Link className='pure-button' to='/topics' onClick={this.handleClient}>I need help </Link>
          {' '}
          <Link className='pure-button' to='/sponsor/topics' onClick={this.handleSponsor}>I want to help</Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    userType: state.userType
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserType: id => dispatch(getUserType(this.state))
//   }
// }

export default connect(mapStateToProps)(App)
// export default App
