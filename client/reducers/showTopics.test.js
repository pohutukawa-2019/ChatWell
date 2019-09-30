import user from './showTopics'
import { RECEIVE_CHOICE } from '../actions'

describe('showTopics reducer tests', () => {
  it('user action returns true', () => {
    const state = false
    const action = {
      type: RECEIVE_CHOICE
    }

    const actual = user(state, action)

    expect(actual).toBe(true)
  })

  // it('GET_FOOD_PENDING action returns false', () => {
  //   const state = false
  //   const action = {
  //     type: GET_FOOD_PENDING
  //   }

  //   const actual = addedFoodReducer(state, action)

  //   expect(actual).toBe(false)
  // })

  // it('NO_MATCH action returns state unchanged', () => {
  //   const state = false
  //   const action = {
  //     type: 'NO_MATCH'
  //   }

  //   const actual = addedFoodReducer(state, action)

  //   expect(actual).toBe(state)
  // })
})
