import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

import { shallow } from 'enzyme'

it('App component renders without crashing', () => {
  shallow(<Header />)
})
