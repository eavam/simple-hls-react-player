import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Title from './index.js'

test('Title', () => {

  const props = {
    title: 'Test'
  }

  const enzymeWrapper = mount(<Title {...props} />)

  expect(enzymeWrapper.find('.title').text()).toBe('Test')

  const componentDisabled = renderer.create(
    <Title {...props} />
  )
  let tree = componentDisabled.toJSON()
  expect(tree).toMatchSnapshot()

})