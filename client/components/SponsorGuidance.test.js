import React from 'react'
import ReactDOM from 'react-dom'
import SponsorGuidance from './SponsorGuidance'

import { shallow } from 'enzyme'

it('SponsorGuidance component renders without crashing', () => {
  shallow(<SponsorGuidance />)
})
