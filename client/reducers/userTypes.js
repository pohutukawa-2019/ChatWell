import { SELECTED_USERTYPES } from '../actions/topics'

export default function userTypeReducer (state = [], action) {
  switch (action.type) {
    case SELECTED_USERTYPES:
      return action.selectedUserType

    default:
      return state
  }
}
