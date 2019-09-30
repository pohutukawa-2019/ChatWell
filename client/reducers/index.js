import { combineReducers } from 'redux'

import topics from './topics'
import error from './error'
import username from './username'
import userType from './userTypes'

export default combineReducers({
  topics,
  username,
  userType,
  error
})
