import React from 'react'
import ReactDOM from 'react-dom'
import Guidance from './Guidance'

import { shallow } from 'enzyme'

it('Guidance component renders without crashing', () => {
  shallow(<Guidance />)
})
