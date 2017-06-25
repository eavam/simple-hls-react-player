import React from 'react'
import renderer from 'react-test-renderer'
import CurrentTime from './index.js'

test('Current time ', () => {

  const props = {
    time: '03:23'
  }

  const component = renderer.create(
    <CurrentTime {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})