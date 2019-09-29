import request from 'superagent'

const baseUrl = '/api'

export default function consume (endpoint, method = 'get', payload = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payloadMethod](payload)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}
