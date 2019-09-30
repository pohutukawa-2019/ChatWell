import addedTypeOfUser from './userTypes'

describe('userType reducer tests returns type of user', () => {
  it('SELECTED_USERTYPES action returns client', () => {
    const state = false
    const action = {
      type: 'SELECTED_USERTYPES',
      selectedUserType: 'client'
    }

    const actual = addedTypeOfUser(state, action)
    expect(actual).toBe('client')
  })

  it('SELECTED_USERTYPES action returns sponsor', () => {
    const state = false
    const action = {
      type: 'SELECTED_USERTYPES',
      selectedUserType: 'sponsor'
    }

    const actual = addedTypeOfUser(state, action)
    expect(actual).toBe('sponsor')
  })
})
