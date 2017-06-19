import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import CurrentTime from './index.js'

test('Current time ', () => {

  const props = {
    time: '03:23'
  }

  const enzymeWrapper = mount(<CurrentTime {...props} />)

  expect(enzymeWrapper.find('div').hasClass('current-time')).toBe(true)

  expect(enzymeWrapper.find('.current-time').text()).toBe('03:23')

  const component = renderer.create(
    <CurrentTime {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})