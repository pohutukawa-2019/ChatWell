import makeRequest from './requestor'

const userTypePath = '/topics'

export default function fetchUser () {
  return makeRequest(userTypePath)
    .then(user => user)
    .catch(() => { throw new Error('Error accessing user type api.') }
    )
}