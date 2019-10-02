import React from 'react'

import Guidance from './Guidance'

import { shallow } from 'enzyme'

it('Guidance component renders without crashing', () => {
  shallow(<Guidance />)
})
