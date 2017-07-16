import Hls from 'hls.js'
import * as actionTypes from '../actionTypes.js'

/**
 * Adds event listeners to volume changes
 */
export const handleChangeVolume = event => dispatch => {
  const bindVolumeMouseMove = volumeMouseMove(event, dispatch)

  // If this single click is reacted immediately
  bindVolumeMouseMove(event)

  // Change the volume when moving the mouse
  window.addEventListener('mousemove', bindVolumeMouseMove)

  // If the button is released, deletes the listeners
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', bindVolumeMouseMove)
  })
}

/**
 * Calculates the value to change the volume
 */
export const volumeMouseMove = (event, dispatch) => {
  const { left: zeroPoint, width: maxPoint } = event.target.getBoundingClientRect()

  return windowEvent => {
    // Difference between the current position and the min
    let volumeNew = windowEvent.clientX - zeroPoint

    // Check value position in range
    if (volumeNew >= maxPoint) volumeNew = maxPoint
    if (volumeNew <= 0) volumeNew = 0

    // Get percent value
    const volumeProcent = volumeNew / (maxPoint / 100)

    // Get float value
    const volumeNumber = volumeProcent / 100

    dispatch(
      actionTypes.changeVolume({
        volumeNumber,
        volumeNew
      })
    )
  }
}

// global timer
let timer = null

/**
 * Show/Hide Controls
*/
export const showHideControls = () => (dispatch, getState) => {
  const { showControls } = getState()
  const action = () => dispatch(actionTypes.toggleShowControls())

  clearTimeout(timer)
  if (!showControls) action()
  timer = setTimeout(action, 5000)
}

let hls = null

export const videoInit = () => (dispatch, getState) => {
  const { videoEl } = getState()

  if (videoEl && !hls) {
    hls = new Hls()
    hls.loadSource(
      'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8'
    )
    hls.attachMedia(videoEl)
    hls.on(Hls.Events.MANIFEST_PARSED, event => dispatch(videoInitialState(event, videoEl)))
  }
}

const videoInitialState = (event, videoEl) => dispatch => {
  videoEl.play()
  videoEl.volume = 0
  videoEl.addEventListener('timeupdate', event => dispatch(actionTimeUpdate(event)))
  dispatch(actionTypes.toggleShowControls())
}

const actionTimeUpdate = event => dispatch => {
  const { currentTime } = event.target

  let minute = Math.floor(currentTime / 60)
  let seconds = Math.floor(currentTime % 60)

  minute = minute < 10 ? `0${minute}` : minute
  seconds = seconds < 10 ? `0${seconds}` : seconds

  dispatch(actionTypes.timeUpdate(`${minute}:${seconds}`))
}
