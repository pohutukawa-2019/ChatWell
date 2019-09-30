import { combineReducers } from 'redux'

import topics from './topics'
import error from './error'
import usernameReducer from './username'

export default combineReducers({
  topics,
  usernameReducer,
  error
})
