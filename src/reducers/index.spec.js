import reducer from './index.js'
import * as actionTypes from '../actionTypes.js'

describe('reducers', () => {

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

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })

  it('should handle TOGGLE_PAUSE', () => {
    
    const video = document.createElement('video')

    expect(
      reducer(
        { ...initState, videoEl: video},
        { type: actionTypes.TOGGLE_PAUSE }
      )
    ).toEqual({
      ...initState,
      videoEl: video,
      isPause: true
    })
  })

})