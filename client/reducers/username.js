import { GET_USERNAME_SUCCESS } from '../actions/username'

export default function usernameReducer (state = [], action) {
  switch (action.type) {
    case GET_USERNAME_SUCCESS:
      return action.foods

    default:
      return state
  }
}
