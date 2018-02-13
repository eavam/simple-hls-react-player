import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import fullscreen from 'fullscreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose, onlyUpdateForKeys, lifecycle } from 'recompose';

import {
  getFullscreen,
  getShowControls,
  getMuted,
  getVolumeNumber,
  getTypeActionPlayer
} from '../../selectors';
import { showHideControls, videoInit } from '../../actions/PlayerActions';
import Controls from '../Controls';

let videoElement = null;

const setVideoElement = element => {
  videoElement = element;
};

const Root = styled('div')`
  width: ${props => (props.isFullscreen ? '100%' : '1280px')};
  height: ${props => (props.isFullscreen ? '100%' : '720px')};
  cursor: ${props => (props.showControls ? 'auto' : 'none')};
  margin: 0 auto;
  position: relative;
`;

const Video = styled('video')`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: black;
`;

const InitVideoElement = lifecycle({
  componentDidMount() {
    this.props.videoInit(this.props.url, videoElement);
  },

  componentWillReceiveProps(nextProps) {
    if (!videoElement) return;

    if (this.props.muted !== nextProps.muted) {
      videoElement.muted = nextProps.muted;
    }
    if (this.props.volumeNumber !== nextProps.volumeNumber) {
      videoElement.volume = nextProps.volumeNumber;
    }
    if (this.props.typeActionPlayer !== nextProps.typeActionPlayer) {
      videoElement[nextProps.typeActionPlayer]();
    }

    if (this.props.isFullscreen !== nextProps.isFullscreen && !nextProps.isFullscreen) {
      fullscreen(videoElement.parentNode).release();
    }
    if (this.props.isFullscreen !== nextProps.isFullscreen && nextProps.isFullscreen) {
      fullscreen(videoElement.parentNode).request();
    }
  }
});

const Player = ({ showControls, onMouseMove, isFullscreen }) => (
  <Root onMouseMove={onMouseMove} isFullscreen={isFullscreen} showControls={showControls}>
    <Video controls={false} innerRef={setVideoElement} />
    {showControls && <Controls />}
  </Root>
);

Player.propTypes = {
  showControls: PropTypes.bool,
  onMouseMove: PropTypes.func,
  isFullscreen: PropTypes.bool
};

Player.defaultProps = {
  showControls: true,
  onMouseMove: () => {},
  isFullscreen: false
};

const mapStateToProps = createStructuredSelector({
  typeActionPlayer: getTypeActionPlayer,
  isFullscreen: getFullscreen,
  showControls: getShowControls,
  volumeNumber: getVolumeNumber,
  muted: getMuted
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onMouseMove: showHideControls,
      videoInit
    },
    dispatch
  );

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  InitVideoElement,
  onlyUpdateForKeys(['showControls', 'isFullscreen', 'muted', 'volumeNumber', 'typeActionPlayer'])
);

export { Player }; // for Tests

export default enhance(Player);
