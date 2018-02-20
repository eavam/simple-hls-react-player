import React from 'react';
import renderer from 'react-test-renderer';
import { SoundControl } from './SoundControl';

test('SoundControl default', () => {
  const component = renderer.create(<SoundControl />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('SoundControl volume', () => {
  const component = renderer.create(<SoundControl volume={23} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('SoundControl muted false', () => {
  const component = renderer.create(<SoundControl muted={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
