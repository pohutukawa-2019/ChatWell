import { combineReducers } from 'redux'

import showTopics from './showTopics'
import topics from './topics'
import error from './error'
import usernameReducer from './username'

export default combineReducers({
  showTopics,
  topics,
  usernameReducer,
  error
})
