import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import PlayPauseControl from './index.js'

test('PlayPauseControl', () => {

  const props = {
    isPause: false,
    onClick: () => {}
  }

  const enzymeWrapper = mount(<PlayPauseControl {...props} />)

  expect(enzymeWrapper.find('div').hasClass('player-svg-icon')).toBe(true)
  expect(enzymeWrapper.find('div').hasClass('icon-margin-right')).toBe(true)


  const componentDisabled = renderer.create(
    <PlayPauseControl {...props} />
  )
  let tree = componentDisabled.toJSON()
  expect(tree).toMatchSnapshot()

  props.isFullscreen = true

  const componentEnabled = renderer.create(
    <PlayPauseControl {...props} />
  )
  tree = componentEnabled.toJSON()
  expect(tree).toMatchSnapshot()

})