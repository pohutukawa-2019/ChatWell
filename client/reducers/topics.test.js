import addedTopicReducer from './topics'

describe('topicReducer reducer tests', () => {
  it('GET_TOPIC_SUCCESS action returns Depression', () => {
    const state = false
    const action = {
      type: 'GET_TOPIC_SUCCESS',
      topics: { id: 1, topic: 'Depression' }
    }

    const actual = addedTopicReducer(state, action)
    expect(actual.topic).toBe('Depression')
  })

  it('SELECTED_TOPICS action returns ', () => {
    const state = false
    const action = {
      type: 'SELECTED_TOPICS',
      selectedTopics: { id: 3, topic: 'Phobia' }
    }

    const actual = addedTopicReducer(state, action)
    expect(actual.topic).toBe('Phobia')
  })
})
