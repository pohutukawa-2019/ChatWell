// import { error } from './error'
// import fetchUser from '../api/userType'

export const GET_USERTYPE_PENDING = 'GET_USERTYPE_PENDING'
export const GET_USERTYPE_SUCCESS = 'GET_USERTYPE_SUCCESS'
export const SELECTED_USERTYPES = 'SELECTED_USERTYPES'

export function userTypeSelected () {
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

export function getUserType (selectedUserType) {
  return {
    type: SELECTED_USERTYPES,
    selectedUserType
  }
}
