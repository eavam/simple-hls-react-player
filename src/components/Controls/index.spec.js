import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Controls from './index.js'


test('Controls', () => {

  const mockStore = configureStore()

  const component = renderer.create(
    <Provider store={mockStore()}>
      <Controls />
    </Provider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

