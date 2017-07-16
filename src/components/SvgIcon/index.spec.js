import React from 'react'
import renderer from 'react-test-renderer'
import SvgIcon from './index.js'

test('SvgIcon', () => {
  const props = {
    viewBox: '',
    className: '',
    children: <div />
  }

  const component = renderer.create(<SvgIcon {...props} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
