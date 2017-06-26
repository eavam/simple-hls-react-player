import React from 'react'
import renderer from 'react-test-renderer'
import SoundControl from './index.js'

test('SoundControl', () => {

  const props = {
    volume: '34',
    muted: false,
    toggleMute: () => {},
    handleChangeVolume: () => {},
  }


  let component = renderer.create(
    <SoundControl {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  props.muted = true

  component = renderer.create(
    <SoundControl {...props} />
  )
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})