import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ClientTopics from './ClientTopics'

const mockStore = configureMockStore()
const store = mockStore({})

describe('ClientTopics Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <ClientTopics />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
