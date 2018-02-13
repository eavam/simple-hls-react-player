import React from 'react';
import renderer from 'react-test-renderer';
import Fullscreen from './index';

test('Fullscreen default', () => {
  const component = renderer.create(<Fullscreen />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Fullscreen true', () => {
  const component = renderer.create(<Fullscreen isFullscreen />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
