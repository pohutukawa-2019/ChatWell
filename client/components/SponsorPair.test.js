import React from 'react'
import ReactDOM from 'react-dom'
import SponsorPair from './SponsorPair'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<SponsorPair />)
})
