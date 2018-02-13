import React from 'react';
import renderer from 'react-test-renderer';
import PlayPauseControl from './index';

test('PlayPauseControl', () => {
  const props = {
    typeActionPlayer: 'play',
    onClick: () => {}
  };

  let component = renderer.create(<PlayPauseControl {...props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  props.typeActionPlayer = 'pause';
  component = renderer.create(<PlayPauseControl {...props} />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
