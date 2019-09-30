import fetchUserType from './topics'

jest.mock('./requestor', () => {
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: 'marvin'
    })
  }
})

describe('API client for user type', () => {
  it('fetchUserType returns user', () => {
    return fetchUserType()
      .then(users => {
        expect(users.body).toBe('marvin')
      })
  })
})
