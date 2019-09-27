const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDB = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('GetTopics function', () => {
  it('getTopics returns an array of topics', () => {
    expect.assertions(1)

    const expected = 12

    return db.getTopics(testDb)
      .then(topics => {
        const actual = topics.length
        expect(actual).toBe(expected)
      })
  })
})