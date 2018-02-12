import React from 'react';
import renderer from 'react-test-renderer';
import Title from './index';

test('Title', () => {
  const props = {
    title: 'Test'
  };

  const component = renderer.create(<Title {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
