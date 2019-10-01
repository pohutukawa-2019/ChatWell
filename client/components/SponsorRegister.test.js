import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import SponsorRegister from './SponsorRegister'

const mockStore = configureMockStore()
const store = mockStore({})

describe('SponsorRegister Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <SponsorRegister />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
