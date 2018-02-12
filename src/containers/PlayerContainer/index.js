import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getFullscreen, getShowControls, getVideoEl } from '../../selectors';
import { showHideControls, videoInit } from '../../actions/PlayerActions';
import { setVideoEl } from '../../actionTypes';
import Player from '../../components/Player';

const mapStateToProps = createStructuredSelector({
  videoEl: getVideoEl,
  isFullscreen: getFullscreen,
  showControls: getShowControls
});

const mapDispatchToProps = dispatch => ({
  onMouseMove: (...rest) => dispatch(showHideControls(...rest)),
  setVideoEl: (...rest) => {
    dispatch(setVideoEl(...rest));
    dispatch(videoInit());
  }
});
export { Player };
export default connect(mapStateToProps, mapDispatchToProps)(Player);
