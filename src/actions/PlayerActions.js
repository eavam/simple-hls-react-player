import * as actionTypes from '../actionTypes.js'
import Hls from 'hls.js'

const makeActionCreator = (type, ...argNames) => {
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

/**
 * Вызывает action на изменения ползунка громкости
 * 
 * @param {event} event - вызываемое событие
 */
export const handleChangeVolume = (event) => (dispatch) => {
  const bindVolumeMouseMove = volumeMouseMove(event, dispatch)

  // Вызваем сразу чтобы реагировать на одиночный клик
  bindVolumeMouseMove(event)

  // Изменяет громкость при перемищении ползунка
  window.addEventListener('mousemove', bindVolumeMouseMove)

  // При отпускании кнопки убираем listener
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', bindVolumeMouseMove)
  })
}

/**
 * Вычисляет на какое значение нужно изменить громкость
 * 
 * @param {event} event - вызываемое событие
 */
const volumeMouseMove = (event, dispatch) => {

  const { left: zeroPoint , width: maxPoint } = event.target.getBoundingClientRect()

  return (windowEvent) => {

    // Получаем разницу между текущей позицией клика
    // и минимальным возможной позицией
    let volumeNew = windowEvent.clientX - zeroPoint

    // Проверяем чтобы значение небыло выше или ниже допустимых
    if( volumeNew >= maxPoint ) volumeNew = maxPoint
    if( volumeNew <= 0 ) volumeNew = 0

    // Получаем процентное значение
    const volumeProcent = volumeNew / (maxPoint / 100)

    // Получаем десятичное значение
    const volumeNumber = volumeProcent / 100

    // videoEl.volume = volumeElementVal
    dispatch(
      changeVolume({
        volumeNumber,
        volumeNew
      })
    )

  }
}

// global timer
let timer = null

/**
 * Показывает или скрывет Controls
*/
export const showHideControls = () => (dispatch, getState) => {
  const { showControls } = getState()
  const action = () => dispatch(toggleShowControls())

  clearTimeout(timer)
  if(!showControls) action()
  timer = setTimeout(action, 5000)
}

let hls = null

export const videoInit = () => (dispatch, getState) => {

  const { videoEl } = getState()

  if(videoEl && !hls) {
    hls = new Hls()
    hls.loadSource('https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8')
    hls.attachMedia(videoEl)
    hls.on(Hls.Events.MANIFEST_PARSED, (event) => dispatch(videoInitialState(event, videoEl)))
  }
}

const videoInitialState = (event, videoEl) => (dispatch) => {
  videoEl.play()
  videoEl.volume = 0
  videoEl.addEventListener('timeupdate', (event) => dispatch(actionTimeUpdate(event)))
  dispatch(toggleShowControls())
}

const actionTimeUpdate = (event) => (dispatch) => {
  const { currentTime } = event.target

  let minute = Math.floor( currentTime / 60 )
  let seconds = Math.floor( currentTime % 60 )

  minute = minute < 10 ? `0${minute}` : minute
  seconds = seconds < 10 ? `0${seconds}` : seconds

  dispatch(timeUpdate(`${minute}:${seconds}`))
}