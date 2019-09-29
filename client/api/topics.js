// import makeRequest from './requestor'
import request from 'superagent'

const topicPath = '/api/topics'

export default function fetchTopics () {
  // return makeRequest(topicPath)
    // .then((topic) => console.log(`test ${topic}`))
    return request
    .get(topicPath)
    // .then((topic) => console.log(topic.body))
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing topics api.') }
    )
}
