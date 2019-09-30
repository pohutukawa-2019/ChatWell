import { SELECTED_USERTYPES } from '../actions/typeOfUser'

export default function userType (state = [], action) {
  switch (action.type) {
    case SELECTED_USERTYPES:
      return action.selectedUserType

    default:
      return state
  }
}
