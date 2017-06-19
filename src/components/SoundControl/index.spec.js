import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import SoundControl from './index.js'

test('SoundControl', () => {

  const props = {
    volume: '34',
    muted: false,
    toggleMute: () => {},
    handleChangeVolume: () => {},
  }

  const enzymeWrapper = mount(<SoundControl {...props} />)

  const componentDisabled = renderer.create(
    <SoundControl {...props} />
  )
  let tree = componentDisabled.toJSON()
  expect(tree).toMatchSnapshot()

  props.muted = true

  const componentEnabled = renderer.create(
    <SoundControl {...props} />
  )
  tree = componentEnabled.toJSON()
  expect(tree).toMatchSnapshot()

})