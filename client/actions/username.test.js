import {
  getUsernamePending,
  getUsernameSuccess,
  setUsername,
  GET_USERNAME_PENDING,
  GET_USERNAME_SUCCESS,
  SELECTED_USERNAME
} from './username'

import { ERROR } from './error'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const id = Number(endpoint.split('/').pop())
    if (id === 33) {
      return Promise.reject(new Error('id not found'))
    } else {
      return Promise.resolve({
        id: id
      })
    }
  }
})

describe('username action tests', () => {
  it('getUsernamePending returns a GET_USERTYPE_PENDING action', () => {
    const action = getUsernamePending()
    expect(action.type).toBe(GET_USERNAME_PENDING)
  })

  // it('getUserSuccess returns a GET_USERTYPE_SUCCESS action', () => {
  //   const userType = 'client'
  //   const action = getUserSuccess(userType)
  //   expect(action.type).toBe(GET_USERTYPE_SUCCESS)
  // })

  // it('getUserType returns a client SELECTED_USERTYPES action', () => {
  //   const userType = 'client'
  //   const action = getUserSuccess(userType)
  //   expect(action.userType).toBe('client')
  // })

  // it('getUserType returns a sponsor SELECTED_USERTYPES action', () => {
  //   const userType = 'sponsor'
  //   const action = getUserSuccess(userType)
  //   expect(action.userType).toBe('sponsor')
  // })
})
