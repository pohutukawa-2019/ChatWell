import React from 'react'

import App from './App'

import { shallow } from 'enzyme'

it('App component renders without crashing', () => {
  shallow(<App />)
})
