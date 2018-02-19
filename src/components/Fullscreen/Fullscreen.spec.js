import React from 'react';
import { shallow } from 'enzyme';
import Fullscreen from './index';
import { FullIcon, WindowIcon } from '../svg-icons';

test('Fullscreen default have FullIcon', () => {
  const component = <Fullscreen />;
  const tree = shallow(component);
  expect(tree.find(FullIcon)).toHaveLength(1);
});

test('Fullscreen isFullscreen true have WindowIcon', () => {
  const component = <Fullscreen isFullscreen />;
  const tree = shallow(component);
  expect(tree.find(WindowIcon)).toHaveLength(1);
});

test('Fullscreen onClick', () => {
  const mockCallback = jest.fn();
  const component = <Fullscreen onClick={mockCallback} />;

  const tree = shallow(component);
  tree.simulate('click');
  expect(mockCallback).toBeCalled();
});
