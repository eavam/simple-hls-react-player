import React from 'react';
import renderer from 'react-test-renderer';
import PlayPauseControl from './index';

test('PlayPauseControl', () => {
  const props = {
    isPause: false,
    onClick: () => {}
  };

  let component = renderer.create(<PlayPauseControl {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.isPause = true;
  component = renderer.create(<PlayPauseControl {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
