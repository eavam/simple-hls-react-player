import React from 'react'
import renderer from 'react-test-renderer'
import Fullscreen from './index.js'

test('Fullscreen', () => {

  const props = {
    isFullscreen: false,
    onClick: () => {}
  }

  let component = renderer.create(
    <Fullscreen {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()


  tree.props.isFullscreen = true
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})