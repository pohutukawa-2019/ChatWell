import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

import { shallow } from 'enzyme'

it('Footer component renders without crashing', () => {
  shallow(<Footer />)
})
