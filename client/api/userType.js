import makeRequest from './requestor'

const userTypePath = '/'

export default function fetchUserType () {
  return makeRequest(userTypePath)
    .then(user => user)
    .catch(() => { throw new Error('Error accessing user type api.') }
    )
}
