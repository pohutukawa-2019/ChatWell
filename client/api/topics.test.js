import fetchTopics from './topics'

jest.mock('./requestor', () => {
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: [
        { id: 1, topic: 'depression' },
        { id: 2, topic: 'stress' }
      ]
    })
  }
})

describe('API client for topics', () => {
  it('fetchTopics returns topics', () => {
    return fetchTopics()
      .then(topics => {
        expect(topics.body).toHaveLength(2)
      })
  })
})
