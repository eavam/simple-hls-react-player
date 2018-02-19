import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  getFullscreen,
  getShowControls,
  getMuted,
  getVolumeNumber,
  getTypeActionPlayer,
} from '../selectors';
import { showHideControls, actionTimeUpdate } from '../actions/PlayerActions';

const mapStateToProps = createStructuredSelector({
  typeActionPlayer: getTypeActionPlayer,
  isFullscreen: getFullscreen,
  showControls: getShowControls,
  volumeNumber: getVolumeNumber,
  muted: getMuted,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onMouseMove: showHideControls,
      actionTimeUpdate,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
