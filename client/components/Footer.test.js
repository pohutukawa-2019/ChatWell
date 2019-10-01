import React from 'react'

import Footer from './Footer'

import { shallow } from 'enzyme'

it('Footer component renders without crashing', () => {
  shallow(<Footer />)
})
