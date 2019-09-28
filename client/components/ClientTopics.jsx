import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Checkbox from './Checkbox'

// import TopicListItem from './TopicListItem'
const topics = ['Depression', 'Anxiety', 'OCD', 'PTSD']

class ClientTopics extends React.Component {
  state={
    checkboxes: topics.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      })
    ),
    topics: []
  }

selectAllCheckboxes = isSelected => {
  Object.keys(this.state.checkboxes).forEach(checkbox => {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [checkbox]: isSelected
      }
    }))
  })
}

selectAll = () => this.selectAllCheckboxes(true)

deselectAll = () => this.selectAllCheckboxes(false)

handleCheckboxChange = changeEvent => {
  const { name } = changeEvent.target;

  this.setState(prevState => ({
    checkboxes: {
      ...prevState.checkboxes,
      [name]: !prevState.checkboxes[name]
    }
  }))
}

handleFormSubmit = formSubmitEvent => {
  formSubmitEvent.preventDefault();

  Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
    .forEach(checkbox => {
      console.log(checkbox, "is selected.")
    })
}

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
    <div>
      <h2>I want to talk about...</h2>
      {/* Using a checklist component for now, until the TopicListItem is ready to go. */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
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
      <Link className='pure-button' to='/register'>Continue</Link>
    </div>
  )
}
}

export default connect()(ClientTopics)
