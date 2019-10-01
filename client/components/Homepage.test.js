import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Homepage from './Homepage'

const mockStore = configureMockStore()
const store = mockStore({})

describe('Homepage Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Homepage />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
