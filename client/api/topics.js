import makeRequest from './requestor'

const topicPath = '/topics'

export default function fetchTopics () {
  return makeRequest(topicPath)
    .then(topics => topics)
    .catch(() => { throw new Error('Error accessing topics api.') }
    )
}