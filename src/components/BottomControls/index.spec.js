import React from 'react'
import renderer from 'react-test-renderer'
import BottomControls from './index.js'

test('BottomControls', () => {
  const props = {
    isFullscreen: false,
    isPause: false,
    volume: '30',
    muted: true,
    time: '04:34',
    handleChangeVolume: () => {},
    togglePause: () => {},
    toggleMute: () => {}
  }

  const component = renderer.create(<BottomControls {...props} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
