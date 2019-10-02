import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Pair from './Pair'

const mockStore = configureMockStore()
const store = mockStore({})

describe('Pair Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Pair />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
