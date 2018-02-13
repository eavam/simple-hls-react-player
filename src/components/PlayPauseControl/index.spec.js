import React from 'react';
import renderer from 'react-test-renderer';
import PlayPauseControl from './index';

test('PlayPauseControl play', () => {
  const component = renderer.create(<PlayPauseControl typeActionPlayer="play" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('PlayPauseControl pause', () => {
  const component = renderer.create(<PlayPauseControl typeActionPlayer="pause" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
