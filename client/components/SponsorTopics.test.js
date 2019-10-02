import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import SponsorTopics from './SponsorTopics'

const mockStore = configureMockStore()
const store = mockStore({})

describe('SponsorTopics Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <SponsorTopics />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
