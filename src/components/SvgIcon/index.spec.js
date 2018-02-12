import React from 'react';
import renderer from 'react-test-renderer';
import SvgIcon from './index';

test('SvgIcon', () => {
  const props = {
    viewBox: '',
    className: '',
    children: <div />
  };

  const component = renderer.create(<SvgIcon {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
