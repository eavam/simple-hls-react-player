import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Title from './index.js'

test('Title', () => {

  const props = {
    title: 'Test'
  }

  const component = renderer.create(
    <Title {...props} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})