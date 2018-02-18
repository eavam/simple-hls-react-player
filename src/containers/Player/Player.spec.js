import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Player } from './Player';

test('PlayerContainer', () => {
  const mockStore = configureStore();
  const store = mockStore({
    typeActionPlayer: 'play',
  });

  const component = renderer.create(
    <Provider store={store}>
      <Player title="Test title" />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
