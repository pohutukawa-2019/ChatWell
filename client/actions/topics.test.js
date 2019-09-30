import {
  getTopicsPending,
  getTopicsSuccess,
  saveTopics,
  getTopics,
  GET_TOPIC_PENDING,
  GET_TOPIC_SUCCESS,
  SELECTED_TOPICS
} from './topics'
//test
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

describe('topics action tests', () => {
  it('getTopicsPending returns a GET_USERTYPE_PENDING action', () => {
    const action = getTopicsPending()
    expect(action.type).toBe(GET_TOPIC_PENDING)
  })

  it('getTopicsSuccess returns a GET_TOPIC_SUCCESS action', () => {
    const action = getTopicsSuccess()
    expect(action.type).toBe(GET_TOPIC_SUCCESS)
  })

  it('saveTopics returns a GET_TOPIC_SUCCESS action', () => {
    const action = saveTopics()
    expect(action.type).toBe(SELECTED_TOPICS)
  })

  it('getTopics dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const topic = 3
    return getTopics(topic)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(GET_TOPIC_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_TOPIC_SUCCESS)
      })
  })
})
