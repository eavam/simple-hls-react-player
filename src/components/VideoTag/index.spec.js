import React from 'react';
import renderer from 'react-test-renderer';
import { VideoTag } from './index';

test('VideoTag', () => {
  const props = {
    setVideoEl: () => {}
  };

  const component = renderer.create(<VideoTag {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
