import reducer from './index';

describe('reducers', () => {
  const initState = {
    title: 'Star Wars',
    volume: 0,
    volumeNumber: 0,
    typeActionPlayer: 'play',
    muted: false,
    currentTime: '00:00',
    isFullscreen: false,
    showControls: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });
});
