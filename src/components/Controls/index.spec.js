import React from 'react'
import renderer from 'react-test-renderer'
import Controls from './index.js'


test('Controls', () => {

  const component = renderer.create(
    <Controls />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

