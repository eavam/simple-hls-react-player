import React from 'react'
import renderer from 'react-test-renderer'
import { VideoTag } from './index.js'


test('VideoTag', () => {
  const props = {
    setVideoEl: () => {}
  }

  const component = renderer.create(
    <VideoTag {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

