import React from 'react';
import { render } from 'enzyme';
import CurrentTime from './index';

test('Current time default', () => {
  const component = <CurrentTime />;
  expect(render(component).text()).toMatch('00:00');
});

test('Current time 03:23', () => {
  const component = <CurrentTime time="03:23" />;
  expect(render(component).text()).toMatch('03:23');
});
