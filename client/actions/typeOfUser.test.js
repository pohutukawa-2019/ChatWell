import {
  userTypeSelected,
  getUserSuccess,
  GET_USERTYPE_PENDING,
  GET_USERTYPE_SUCCESS
} from './typeOfUser'

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

describe('typeOfUser action tests', () => {
  it('userTypeSelected returns a GET_USERTYPE_PENDING action', () => {
    const action = userTypeSelected()
    expect(action.type).toBe(GET_USERTYPE_PENDING)
  })

  it('getUserSuccess returns a GET_USERTYPE_SUCCESS action', () => {
    const userType = 'client'
    const action = getUserSuccess(userType)
    expect(action.type).toBe(GET_USERTYPE_SUCCESS)
  })

  it('getUserType returns a client as SELECTED_USERTYPES action', () => {
    const userType = 'client'
    const action = getUserSuccess(userType)
    expect(action.userType).toBe('client')
  })

  it('getUserType returns a sponsor as SELECTED_USERTYPES action', () => {
    const userType = 'sponsor'
    const action = getUserSuccess(userType)
    expect(action.userType).toBe('sponsor')
  })
})
