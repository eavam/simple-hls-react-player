import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Player } from './index';

test('PlayerContainer', () => {
  const props = {
    showControls: true,
    isFullscreen: false,
    videoEl: document.createElement('video')
  };

  const mockStore = configureStore();

  const component = renderer.create(
    <Provider store={mockStore()}>
      <Player {...props} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
