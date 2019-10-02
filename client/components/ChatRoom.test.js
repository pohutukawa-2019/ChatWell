import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ChatRoom from './ChatRoom'

const mockStore = configureMockStore()
const store = mockStore({})

describe('ChatRoom Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <ChatRoom />
        </Provider>
      ).exists()
    ).toBe(true)
  })
})
