import { RECEIVE_CHOICE } from '../actions'

function user (state = [], action) {
  console.log(action.choice)
  switch (action.type) {
    case RECEIVE_CHOICE:
      return action.choice

    default:
      return state
  }
}

export default user
