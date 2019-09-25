import request from 'superagent'

export function getTopicsList () {
  return request.get('/topics')
  .then(res => {
    const list = res.body
    return list
  })
  .catch (() => {
    throw Error('cannot get list of topics')
  })
}

