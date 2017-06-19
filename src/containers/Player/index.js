import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hls from 'hls.js'
import Controls from '../Controls'
import VideoTag from '../VideoTag'
import * as PlayerActions from '../../actions/PlayerActions.js'

export class Player extends Component {

  constructor(props) {
    super(props)
    this.timeUpdate = this.timeUpdate.bind(this)
    this.videoInit = this.videoInit.bind(this)
    this.showHide = this.showHide.bind(this)
    this.state = {
      timer: null
    }
  }

  componentDidMount() {
    const { toggleShowControls } = this.props.actions
    
    // Начинаем отсчет таймера до скрытия Controls
    this.setState({
      timer: setTimeout(toggleShowControls, 5000)
    })
  }

  componentWillReceiveProps(nextProps) {
    const { videoEl } = nextProps
    
    // Когда тег будет создан инициализируем стрим
    if(videoEl && videoEl !== this.props.videoEl) {
      this.hls = new Hls()
      this.hls.loadSource('https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8')
      this.hls.attachMedia(videoEl)
      this.hls.on(Hls.Events.MANIFEST_PARSED, this.videoInit)
    }
  }

  /**
   * Инициализирует начальные параметры <video>
   */
  videoInit() {
    const { videoEl, actions } = this.props
    videoEl.play()
    videoEl.volume = 0
    videoEl.addEventListener('timeupdate', this.timeUpdate)
    actions.toggleShowControls()
  }

  /**
   * Обавляет время стрима
   */
  timeUpdate(event) {
    const { timeUpdate } = this.props.actions
    const currentTime = event.target.currentTime
    let minute = Math.floor( currentTime / 60 )
    let seconds = Math.floor( currentTime % 60 )

    minute = minute < 10 ? `0${minute}` : minute
    seconds = seconds < 10 ? `0${seconds}` : seconds

    timeUpdate(`${minute}:${seconds}`)
  }

  /**
   * Показывает или скрывет Controls
  */
  showHide() {
    const { timer } = this.state
    const { showControls, actions } = this.props

    clearTimeout(timer)
    if(!showControls) actions.toggleShowControls()
    
    this.setState({
      timer: setTimeout(actions.toggleShowControls, 5000)
    })

  }

  render() {
    const { isFullscreen, showControls, actions } = this.props

    const stylesWrapper = {
      width: isFullscreen ? '100%' : 1280,
      height: isFullscreen ? '100%' : 720,
      margin: '0 auto',
      position: 'relative'
    }

    return (
      <div style={stylesWrapper} onMouseMove={this.showHide} >
        <VideoTag setVideoEl={actions.setVideoEl} />
        {showControls && <Controls />}
      </div>
    )
  }
}

Player.propTypes = {
  videoEl: PropTypes.object,
  showControls: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    videoEl: state.videoEl,
    isFullscreen: state.isFullscreen,
    showControls: state.showControls
  }
}

function mapDispathToProps(dispath) {
  return {
    actions: bindActionCreators(PlayerActions, dispath)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Player)
