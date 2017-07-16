import React from 'react'
import renderer from 'react-test-renderer'
import Fullscreen from './index.js'

test('Fullscreen', () => {
  const props = {
    isFullscreen: false,
    onClick: () => {}
  }

  let component = renderer.create(<Fullscreen {...props} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  props.isFullscreen = true

  component = renderer.create(<Fullscreen {...props} />)

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
