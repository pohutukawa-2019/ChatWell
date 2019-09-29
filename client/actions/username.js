import { error } from './error'
import fetchUsername from '../api/fetchUsername'

export const GET_USERNAME_PENDING = 'GET_USERNAME_PENDING'
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS'

export function getUsernamePending () {
  return {
    type: GET_USERNAME_PENDING
  }
}

export function getUsernameSuccess (userName) {
  return {
    type: GET_USERNAME_SUCCESS,
    userName
  }
}

export function getUsername () {
  return dispatch => {
    dispatch(getUsernamePending())
    return fetchUsername()
      .then(userName => {
        dispatch(getUsernameSuccess(userName))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}
