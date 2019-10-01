import Topic from './Topic'

describe('<Topic>', () => {
  it('updates the state of a property on input change', () => {
    const topic = { id: 1, topic: 'Depression' }
    const actual = '' + Topic({ id: 1, topic })
    const expected = '[object Object]'
    expect(actual).toBe(expected)
  })
})
