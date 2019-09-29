import { combineReducers } from 'redux'

import showTopics from './showTopics'
import topics from './topics'
import error from './error'

export default combineReducers({
  showTopics,
  topics,
  error
})
