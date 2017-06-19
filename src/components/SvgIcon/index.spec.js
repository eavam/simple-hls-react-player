import React from 'react'
import renderer from 'react-test-renderer'
import SvgIcon from './index.js'

test('SvgIcon', () => {

  const props = {
    viewBox: '',
    className: '',
    children: <div />
  }

  const componentDisabled = renderer.create(
    <SvgIcon {...props} />
  )
  let tree = componentDisabled.toJSON()
  expect(tree).toMatchSnapshot()

})