import * as actions from './PlayerActions.js'
import * as actionTypes from '../actionTypes.js'

describe('actions', () => {
  it('toggleMute action', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_MUTE
    }

    expect(actions.toggleMute()).toEqual(expectedAction)
  })

  it('togglePause action', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_PAUSE
    }

    expect(actions.togglePause()).toEqual(expectedAction)
  })

  it('toggleFullscreen action', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_FULLSCREEN
    }

    expect(actions.toggleFullscreen()).toEqual(expectedAction)
  })

  it('toggleShowControls action', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_SHOW_CONTROLS
    }

    expect(actions.toggleShowControls()).toEqual(expectedAction)
  })

  it('timeUpdate action', () => {
    const expectedAction = {
      type: actionTypes.TIME_UPDATE,
      time: '04:34'
    }

    expect(actions.timeUpdate('04:34')).toEqual(expectedAction)
  })

  it('changeVolume action', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_VOLUME,
      volume: 45
    }

    expect(actions.changeVolume(45)).toEqual(expectedAction)
  })

  it('setVideoEl action', () => {
    const video = document.createElement('video')

    const expectedAction = {
      type: actionTypes.SET_VIDEO_ELEMENT,
      element: video
    }

    expect(actions.setVideoEl(video)).toEqual(expectedAction)
  })

  it('volumeMouseMove action', () => {
    const init = {
      type: actionTypes.CHANGE_VOLUME,
      volume: {
        volumeNumber: 0.34,
        volumeNew: 34
      }
    }

    const event = {
      target: {
        getBoundingClientRect: () => ({ left: 300, width: 100 })
      }
    }

    const windowEvent = {
      clientX: 334
    }

    const dispatсh = o => expect(o).toEqual(init)

    actions.volumeMouseMove(event, dispatсh)(windowEvent)
  })
})
