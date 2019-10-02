require('babel-polyfill')
const request = require('supertest')

const server = require('../../../server/server')
const db = require('./db') // the mock

jest.mock('./db')

beforeEach(() => {
  db.reset()
})

test('GET / returns all the fruits', () => {
  return request(server)
    .get('/')
    .then(res => {
      expect(res.body.fruits).toHaveLength(3)
    })
})
