import React from 'react';
import renderer from 'react-test-renderer';
import CurrentTime from './index';

test('Current time default', () => {
  const component = renderer.create(<CurrentTime />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Current time 03:23', () => {
  const component = renderer.create(<CurrentTime time="03:23" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
