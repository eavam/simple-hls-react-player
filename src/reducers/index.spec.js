import reducer from './index';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});
