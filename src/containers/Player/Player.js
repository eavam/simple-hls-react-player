import Hls from 'hls.js';
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
  getTypeActionPlayer,
} from '../../selectors';
import { showHideControls, actionTimeUpdate } from '../../actions/PlayerActions';
import Controls from '../Controls';

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

let videoElement = null;

const setVideoElement = element => {
  videoElement = element;
};

const InitVideoElement = lifecycle({
  componentDidMount() {
    if (videoElement) {
      const hls = new Hls();
      hls.loadSource(this.props.url);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement[this.props.typeActionPlayer]();
        videoElement.volume = this.props.volumeNumber;
        videoElement.addEventListener('timeupdate', this.props.actionTimeUpdate);
      });
    }
  },

  componentWillUnmount() {
    videoElement.removeEventListener('timeupdate', this.props.actionTimeUpdate);
  },

  componentDidUpdate(prevProps) {
    if (!videoElement) return;
    const { props } = this;

    if (props.muted !== prevProps.muted) {
      videoElement.muted = props.muted;
    }
    if (props.volumeNumber !== prevProps.volumeNumber) {
      videoElement.volume = props.volumeNumber;
    }
    if (props.typeActionPlayer !== prevProps.typeActionPlayer) {
      videoElement[props.typeActionPlayer]();
    }

    const changeIsFullscreen = props.isFullscreen !== prevProps.isFullscreen;

    if (changeIsFullscreen && !props.isFullscreen) {
      fullscreen(videoElement.parentNode).release();
    }
    if (changeIsFullscreen && props.isFullscreen) {
      fullscreen(videoElement.parentNode).request();
    }
  },
});

export const Player = ({ showControls, onMouseMove, isFullscreen, title }) => (
  <Root onMouseMove={onMouseMove} isFullscreen={isFullscreen} showControls={showControls}>
    <Video controls={false} innerRef={setVideoElement} />
    {showControls && <Controls title={title} />}
  </Root>
);

Player.propTypes = {
  title: PropTypes.string.isRequired,
  showControls: PropTypes.bool,
  onMouseMove: PropTypes.func,
  isFullscreen: PropTypes.bool,
};

Player.defaultProps = {
  showControls: true,
  onMouseMove: () => {},
  isFullscreen: false,
};

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

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  InitVideoElement,
  onlyUpdateForKeys(['showControls', 'isFullscreen', 'muted', 'volumeNumber', 'typeActionPlayer']),
);

export default enhance(Player);
