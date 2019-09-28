import { GET_TOPIC_SUCCESS } from '../actions/topics'

export default function topicReducer (state = [], action) {
  switch (action.type) {
    case GET_TOPIC_SUCCESS:
      return action.topics

    default:
      return state

  }
}
