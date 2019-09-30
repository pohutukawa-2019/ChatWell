import request from 'superagent'

import { getEncodedToken } from 'authenticare/client'

const baseUrl = '/api'

export default function consume (endpoint, method = 'get', payload = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payloadMethod](payload)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}
