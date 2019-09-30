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
    console.log(action, 'hahaha', user)
    expect(action.type).toBe(GET_USERTYPE_SUCCESS)
    expect(action.typeOfUser).toBe(userType)
  })
})
