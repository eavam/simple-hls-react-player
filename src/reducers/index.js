import { createReducer } from 'redux-act';
import * as actionTypes from '../actionTypes';

const initState = {
  title: 'Star Wars',
  volume: 0,
  volumeNumber: 0,
  typeActionPlayer: 'play',
  muted: false,
  currentTime: '00:00',
  isFullscreen: false,
  showControls: true,
};

const playerReducer = createReducer(
  {
    [actionTypes.changeVolume]: (state, action) => ({
      ...state,
      volume: action.volume.volumeNew,
      volumeNumber: action.volume.volumeNumber,
      muted: false,
    }),

    [actionTypes.togglePause]: state => ({
      ...state,
      typeActionPlayer: state.typeActionPlayer === 'play' ? 'pause' : 'play',
    }),

    [actionTypes.toggleMute]: state => ({
      ...state,
      muted: !state.muted,
    }),

    [actionTypes.timeUpdate]: (state, action) => ({
      ...state,
      currentTime: action.time,
    }),

    [actionTypes.toggleFullscreen]: state => ({
      ...state,
      isFullscreen: !state.isFullscreen,
    }),

    [actionTypes.toggleShowControls]: state => ({
      ...state,
      showControls: !state.showControls,
    }),
  },
  initState,
);

export default playerReducer;
