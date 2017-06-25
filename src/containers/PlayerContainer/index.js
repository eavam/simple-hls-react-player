import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getFullscreen, getShowControls, getVideoEl } from '../../selectors'
import { showHideControls, setVideoEl, videoInit } from '../../actions/PlayerActions.js'
import Player from '../../components/Player'


const mapStateToProps = createStructuredSelector({
  videoEl: getVideoEl,
  isFullscreen: getFullscreen,
  showControls: getShowControls
})

const mapDispatchToProps = dispatch => ({
  onMouseMove: (...rest) => dispatch(showHideControls(...rest)),
  setVideoEl: (...rest) => {
    dispatch(setVideoEl(...rest))
    dispatch(videoInit())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
