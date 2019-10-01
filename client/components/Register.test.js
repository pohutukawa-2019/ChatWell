import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Register from './Register'

const mockStore = configureMockStore()
const store = mockStore({})

describe('Register Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Register />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
