import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as PlayerActions from '../../actions/PlayerActions.js'

import Title from '../../components/Title'
import Fullscreen from '../../components/Fullscreen'
import CurrentTime from '../../components/CurrentTime'
import SoundControl from '../../components/SoundControl'
import PlayPauseControl from '../../components/PlayPauseControl'

import ControlsWrapper from '../../layout/ControlsWrapper'
import BottomControlsWrapper from '../../layout/BottomControlsWrapper'
import TopControlsWrapper from '../../layout/TopControlsWrapper'
import LeftColumn from '../../layout/LeftColumn'
import RightColumn from '../../layout/RightColumn'

export class Controls extends Component {

  constructor(props) {
    super(props)
    this.handleChangeVolume = this.handleChangeVolume.bind(this)
    this.volumeMouseMove = this.volumeMouseMove.bind(this)
  }

  /**
   * Вызывает action на изменения ползунка громкости
   * 
   * @param {event} event - вызываемое событие
   */
  handleChangeVolume(event) {
    const bindVolumeMouseMove = this.volumeMouseMove(event)

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
  volumeMouseMove(event) {
    const { actions, videoEl } = this.props

    const { left: zeroPoint , width: maxPoint } = event.target.getBoundingClientRect()

    return (windowEvent) => {

      // Получаем разницу между текущей позицией клика
      // и минимальным возможной позицией
      let newVolume = windowEvent.clientX - zeroPoint

      // Проверяем чтобы значение небыло выше или ниже допустимых
      if( newVolume >= maxPoint ) newVolume = maxPoint
      if( newVolume <= 0 ) newVolume = 0

      // Получаем процентное значение
      const percentVolume = newVolume / (maxPoint / 100)

      // Получаем десятичное значение
      const volumeElementVal = percentVolume / 100

      videoEl.volume = volumeElementVal
      actions.changeVolume(newVolume)

    }
  }

  render() {

    const {
      volume,
      isPause,
      muted,
      currentTime,
      isFullscreen,
      title,
      actions
    } = this.props

    return (
      <ControlsWrapper>

        <TopControlsWrapper>
          <Title title={title} />
        </TopControlsWrapper>

        <BottomControlsWrapper>

          <LeftColumn>
            <PlayPauseControl isPause={isPause} onClick={actions.togglePause} />
            <SoundControl
              handleChangeVolume={this.handleChangeVolume}
              toggleMute={actions.toggleMute}
              volume={volume}
              muted={muted}
            />
          </LeftColumn>

          <RightColumn>
            <CurrentTime time={currentTime} />
            <Fullscreen isFullscreen={isFullscreen} toggleFullscreen={actions.toggleFullscreen} />
          </RightColumn>

        </BottomControlsWrapper>
      </ControlsWrapper>
    )
  }
}

Controls.propTypes = {
  actions: PropTypes.object,
  volume: PropTypes.string,
  muted: PropTypes.bool,
  currentTime: PropTypes.string,
  isFullscreen: PropTypes.bool,
  title: PropTypes.string,
  handleChangeVolume: PropTypes.func,
  isPause: PropTypes.bool,
  videoEl: PropTypes.object
}

function mapStateToProps(state) {

  const {
    videoEl,
    volume,
    isPause,
    muted,
    currentTime,
    isFullscreen,
    title
  } = state

  return {
    videoEl,
    volume,
    isPause,
    muted,
    currentTime,
    isFullscreen,
    title
  }
}

function mapDispathToProps(dispath) {
  return {
    actions: bindActionCreators(PlayerActions, dispath)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Controls)