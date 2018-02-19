import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { handleChangeVolume } from '../actions/PlayerActions';
import { togglePause, toggleMute, toggleFullscreen } from '../actionTypes';
import { getTypeActionPlayer, getVolume, getMuted, getTime, getFullscreen } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isFullscreen: getFullscreen,
  typeActionPlayer: getTypeActionPlayer,
  volume: getVolume,
  muted: getMuted,
  time: getTime,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onClickPlay: togglePause,
      onClickMute: toggleMute,
      onClickFullScreen: toggleFullscreen,
      onChangeVolume: handleChangeVolume,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
