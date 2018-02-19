import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from 'enzyme';
import Controls from './index';

test('Controls default', () => {
  const mockStore = configureStore();
  const store = mockStore({
    typeActionPlayer: 'play',
  });

  const component = renderer.create(
    <Provider store={store}>
      <Controls
        togglePause={() => {}}
        toggleMute={() => {}}
        handleChangeVolume={() => {}}
        toggleFullscreen={() => {}}
      />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Contorls has title', () => {
  const mockStore = configureStore();
  const store = mockStore({
    typeActionPlayer: 'play',
  });

  const component = (
    <Provider store={store}>
      <Controls title="Test title controls" />
    </Provider>
  );

  expect(render(component).text()).toMatch('Test title controls');
});

test('Controls has time', () => {
  const mockStore = configureStore();
  const store = mockStore({
    time: '10:10',
    typeActionPlayer: 'play',
  });

  const component = (
    <Provider store={store}>
      <Controls />
    </Provider>
  );

  expect(render(component).text()).toMatch('10:10');
});
