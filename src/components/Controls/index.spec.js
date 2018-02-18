import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import Controls from './index';

test('Controls default', () => {
  const component = renderer.create(
    <Controls
      typeActionPlayer="play"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Contorls has title', () => {
  const component = (
    <Controls
      title="Test title controls"
      typeActionPlayer="play"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />
  );

  expect(render(component).text()).toMatch('Test title controls');
});

test('Controls fullScreen true', () => {
  const component = renderer.create(
    <Controls
      isFullscreen
      typeActionPlayer="play"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls fullScreen false', () => {
  const component = renderer.create(
    <Controls
      isFullscreen={false}
      typeActionPlayer="play"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls typeActionPlayer pause', () => {
  const component = renderer.create(
    <Controls
      typeActionPlayer="pause"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls volume', () => {
  const component = renderer.create(
    <Controls
      volume={10}
      typeActionPlayer="pause"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls muted true', () => {
  const component = renderer.create(
    <Controls
      muted
      typeActionPlayer="pause"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls muted false', () => {
  const component = renderer.create(
    <Controls
      muted={false}
      typeActionPlayer="pause"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls time', () => {
  const component = renderer.create(
    <Controls
      time="15:05"
      typeActionPlayer="pause"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Controls has time', () => {
  const component = (
    <Controls
      time="15:15"
      typeActionPlayer="play"
      togglePause={() => {}}
      toggleMute={() => {}}
      handleChangeVolume={() => {}}
      toggleFullscreen={() => {}}
    />
  );

  expect(render(component).text()).toMatch('15:15');
});
