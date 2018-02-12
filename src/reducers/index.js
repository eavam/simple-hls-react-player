import fullscreen from 'fullscreen';
import { createReducer } from 'redux-act';
import * as actionTypes from '../actionTypes';

const initState = {
  videoEl: null,
  title: 'Star Wars',
  volume: '0',
  isPause: false,
  muted: false,
  currentTime: '00:00',
  isFullscreen: false,
  showControls: false
};

const playerReducer = createReducer(
  {
    [actionTypes.setVideoEl]: (state, action) => ({
      ...state,
      videoEl: action.element
    }),

    [actionTypes.changeVolume]: (state, action) => {
      const { volumeNumber, volumeNew } = action.volume;
      const { videoEl } = state;

      videoEl.muted = false;
      videoEl.volume = volumeNumber;

      return {
        ...state,
        volume: volumeNew,
        muted: false
      };
    },

    [actionTypes.togglePause]: state => {
      if (state.isPause) {
        state.videoEl.play();
      } else {
        state.videoEl.pause();
      }

      return {
        ...state,
        isPause: !state.isPause
      };
    },

    [actionTypes.toggleMute]: state => {
      const { videoEl } = state;

      videoEl.muted = !state.muted;

      return {
        ...state,
        muted: !state.muted
      };
    },

    [actionTypes.timeUpdate]: (state, action) => ({
      ...state,
      currentTime: action.time
    }),

    [actionTypes.toggleFullscreen]: state => {
      if (state.isFullscreen) {
        fullscreen(state.videoEl.parentNode).release();
      } else {
        fullscreen(state.videoEl.parentNode).request();
      }

      return {
        ...state,
        isFullscreen: !state.isFullscreen
      };
    },

    [actionTypes.toggleShowControls]: state => ({
      ...state,
      showControls: !state.showControls
    })
  },
  initState
);

export default playerReducer;
