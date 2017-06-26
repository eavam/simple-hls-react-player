import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { Player } from './index.js'
import configureStore from 'redux-mock-store'



test('PlayerContainer', () => {
  const props = {
    showControls: true,
    isFullscreen: false,
    videoEl: document.createElement('video')
  }

  const mockStore = configureStore()

  const component = renderer.create(
    <Provider store={mockStore()} >
      <Player {...props} />
    </Provider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

