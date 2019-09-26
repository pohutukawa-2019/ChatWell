import makeRequest from './requestor'

const topicPath = '/topics'

export default function fetchTopics () {
  return makeRequest(topicPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.')})
}
