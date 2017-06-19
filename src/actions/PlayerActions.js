import * as actionTypes from '../actionTypes.js'

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const toggleMute = makeActionCreator(actionTypes.TOGGLE_MUTE)
export const togglePause = makeActionCreator(actionTypes.TOGGLE_PAUSE)
export const toggleFullscreen = makeActionCreator(actionTypes.TOGGLE_FULLSCREEN)
export const toggleShowControls = makeActionCreator(actionTypes.TOGGLE_SHOW_CONTROLS)

export const timeUpdate = makeActionCreator(actionTypes.TIME_UPDATE, 'time')
export const setVideoEl = makeActionCreator(actionTypes.SET_VIDEO_ELEMENT, 'element')
export const changeVolume = makeActionCreator(actionTypes.CHANGE_VOLUME, 'volume')