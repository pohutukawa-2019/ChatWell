import { GET_USERNAME_SUCCESS, SELECTED_USERNAME } from '../actions/username'

export default function usernameReducer (state = [], action) {
  switch (action.type) {
    case GET_USERNAME_SUCCESS:
      return action.foods

    case SELECTED_USERNAME:
      return action.selectedUsername
    default:
      return state
  }
}
