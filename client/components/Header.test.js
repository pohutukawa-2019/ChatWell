import React from 'react'

import Header from './Header'

import { shallow } from 'enzyme'

it('Header component renders without crashing', () => {
  shallow(<Header />)
})
