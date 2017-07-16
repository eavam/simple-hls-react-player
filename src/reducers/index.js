import fullscreen from 'fullscreen'
import { createReducer } from 'redux-act'
import * as actionTypes from '../actionTypes.js'

const initState = {
  videoEl: null,
  title: 'Test title',
  volume: '0',
  isPause: false,
  muted: false,
  currentTime: '00:00',
  isFullscreen: false,
  showControls: false
}

const playerReducer = createReducer(
  {
    [actionTypes.setVideoEl]: (state, action) => ({
      ...state,
      videoEl: action.element
    }),

    [actionTypes.changeVolume]: (state, action) => {
      const { volumeNumber, volumeNew } = action.volume
      state.videoEl.muted = false
      state.videoEl.volume = volumeNumber

      return {
        ...state,
        volume: volumeNew,
        muted: false
      }
    },

    [actionTypes.togglePause]: state => {
      state.isPause ? state.videoEl.play() : state.videoEl.pause()

      return {
        ...state,
        isPause: !state.isPause
      }
    },

    [actionTypes.toggleMute]: state => {
      state.videoEl.muted = !state.muted

      return {
        ...state,
        muted: !state.muted
      }
    },

    [actionTypes.timeUpdate]: (state, action) => ({
      ...state,
      currentTime: action.time
    }),

    [actionTypes.toggleFullscreen]: state => {
      state.isFullscreen
        ? fullscreen(state.videoEl.parentNode).release()
        : fullscreen(state.videoEl.parentNode).request()

      return {
        ...state,
        isFullscreen: !state.isFullscreen
      }
    },

    [actionTypes.toggleShowControls]: state => ({ ...state, showControls: !state.showControls })
  },
  initState
)

export default playerReducer
