import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Fullscreen from './index.js'

test('Fullscreen', () => {

  const props = {
    isFullscreen: false,
    toggleFullscreen: () => {}
  }

  const enzymeWrapper = mount(<Fullscreen {...props} />)

  expect(enzymeWrapper.find('div').hasClass('player-svg-icon')).toBe(true)
  expect(enzymeWrapper.find('div').hasClass('icon-margin-left')).toBe(true)


  const componentDisabled = renderer.create(
    <Fullscreen {...props} />
  )
  let tree = componentDisabled.toJSON()
  expect(tree).toMatchSnapshot()

  props.isFullscreen = true

  const componentEnabled = renderer.create(
    <Fullscreen {...props} />
  )
  tree = componentEnabled.toJSON()
  expect(tree).toMatchSnapshot()

})