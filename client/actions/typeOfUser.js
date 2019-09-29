import { error } from './error'
import fetchUser from '../api/userType'

export const GET_USERTYPE_PENDING = 'GET_USERTYPE_PENDING'
export const GET_USERTYPE_SUCCESS = 'GET_USERTYPE_SUCCESS'

export function getUserTypePending () {
  return {
    type: GET_USERTYPE_PENDING
  }
}

export function getUserSuccess (userType) {
  return {
    type: GET_USERTYPE_SUCCESS,
    userType
  }
}

export function getUserType () {
  return dispatch => {
    dispatch(getUserTypePending())
    return fetchUser()
      .then(userType => {
        dispatch(getUserSuccess(userType))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}