import React from 'react';
import renderer from 'react-test-renderer';
import CurrentTime from './index';

test('Current time ', () => {
  const props = {
    time: '03:23'
  };

  const component = renderer.create(<CurrentTime {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
