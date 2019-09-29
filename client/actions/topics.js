import { error } from './error'
import fetchTopics from '../api/topics'

export const GET_TOPIC_PENDING = 'GET_TOPIC_PENDING'
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS'

export function getTopicsPending () {
  return {
    type: GET_TOPIC_PENDING
  }
}

export function getTopicsSuccess (topics) {
  return {
    type: GET_TOPIC_SUCCESS,
    topics
  }
}

export function getTopics () {
  return dispatch => {
    dispatch(getTopicsPending())
    return fetchTopics()
      .then(topics => {
        dispatch(getTopicsSuccess(topics))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}