import React from 'react'
import renderer from 'react-test-renderer'
import PlayPauseControl from './index.js'

test('PlayPauseControl', () => {

  const props = {
    isPause: false,
    onClick: () => {}
  }


  const component = renderer.create(
    <PlayPauseControl {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.isFullscreen = true
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})