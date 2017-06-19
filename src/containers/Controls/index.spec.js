import React from 'react'
import renderer from 'react-test-renderer'
import { Controls } from './index.js'


test('Controls', () => {
  const props = {
    actions: {},
    volume: '30',
    muted: true,
    currentTime: '04:34',
    isFullscreen: false,
    title: 'test title',
    handleChangeVolume: () => {},
    isPause: false,
    videoEl: document.createElement('video')
  }

  const component = renderer.create(
    <Controls {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

