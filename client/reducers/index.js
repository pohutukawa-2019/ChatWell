import { combineReducers } from 'redux'

import showTopics from './showTopics'
import topics from './topics'

export default combineReducers({
  showTopics,
  topics
})
