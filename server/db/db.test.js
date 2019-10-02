const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

jest.setTimeout(20000) 

afterEach(() => env.cleanup(testDb))

describe('Database functions for Topic', () => {
  it('getTopicList returns an array length of Topic from db', () => {
    expect.assertions(1)

    const expected = 15

    return db.getTopicList(testDb)
      .then(topic => {
        const actual = topic.length
        expect(actual).toBe(expected)
      })
  })

  it('getTopicById returns returns a topic', () => {
    const expected = 'Stress'
    return db.getTopicById(2, testDb)
      .then(topic => {
        const actual = topic.topic
        expect(actual).toBe(expected)
      })
  })

})
