import fullscreen from 'fullscreen'
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

const player = (state = initState, action) => {
  switch (action.type) {

  case actionTypes.SET_VIDEO_ELEMENT:
    return {
      ...state,
      videoEl: action.element
    }

  case actionTypes.CHANGE_VOLUME:

    state.videoEl.muted = false

    return {
      ...state,
      volume: action.volume,
      muted: false
    }

  case actionTypes.TOGGLE_PAUSE:

    state.isPause
      ? state.videoEl.play()
      : state.videoEl.pause()

    return {
      ...state,
      isPause: !state.isPause
    }

  case actionTypes.TOGGLE_MUTE:

    state.videoEl.muted = !state.muted

    return {
      ...state,
      muted: !state.muted
    }

  case actionTypes.TIME_UPDATE:
    return {
      ...state,
      currentTime: action.time
    }

  case actionTypes.TOGGLE_FULLSCREEN:

    state.isFullscreen
      ? fullscreen(state.videoEl.parentNode).release()
      : fullscreen(state.videoEl.parentNode).request()
      // debugger
    return {
      ...state,
      isFullscreen: !state.isFullscreen
    }

  case actionTypes.TOGGLE_SHOW_CONTROLS:
    return {
      ...state,
      showControls: !state.showControls
    }

  default:
    return state
  }
}

export default player