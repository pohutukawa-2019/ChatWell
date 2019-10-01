import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import SponsorPair from './SponsorPair'

const mockStore = configureMockStore()
const store = mockStore({})

describe('SponsorPair Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <SponsorPair />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
