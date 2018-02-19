import React from 'react';
import Hls from 'hls.js';
import fullscreen from 'fullscreen';
import { lifecycle } from 'recompose';

let videoElement = null;

const setVideoElement = element => {
  videoElement = element;
};

const LifecycleMethods = lifecycle({
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

const withVideoElemnt = Component => {
  const WithComponent = props => <Component innerRef={setVideoElement} {...props} />;

  return LifecycleMethods(WithComponent);
};

export default withVideoElemnt;
