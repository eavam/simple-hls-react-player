import React from 'react';
import renderer from 'react-test-renderer';
import BottomControls from './index';

test('BottomControls', () => {
  const props = {
    isFullscreen: false,
    isPause: false,
    volume: '30',
    muted: true,
    time: '04:34',
    handleChangeVolume: () => {},
    togglePause: () => {},
    toggleMute: () => {},
    toggleFullscreen: () => {}
  };

  const component = renderer.create(<BottomControls {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
