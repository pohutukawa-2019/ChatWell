import React from 'react'
import ReactDOM from 'react-dom'
import SponsorTopics from './SponsorTopics'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<SponsorTopics />)
})