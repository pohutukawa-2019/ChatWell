import { GET_TOPIC_SUCCESS, SELECTED_TOPICS } from '../actions/topics'

export default function topicReducer (state = [], action) {

  switch (action.type) {
    case GET_TOPIC_SUCCESS:
      return action.topics

    case SELECTED_TOPICS:
      return action.selectedTopics

    default:
      return state
  }
}
