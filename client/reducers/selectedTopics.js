import { SELECTED_TOPICS } from '../actions/topics'

export default function selectedTopicReducer (state = [], action) {
  switch (action.type) {
    case SELECTED_TOPICS:
    return action.selectedTopics

  }
}