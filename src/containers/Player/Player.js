import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose, onlyUpdateForKeys, lifecycle } from 'recompose';

import { getFullscreen, getShowControls, getVideoEl } from '../../selectors';
import { showHideControls, videoInit } from '../../actions/PlayerActions';
import { setVideoEl } from '../../actionTypes';
import Controls from '../Controls';

const Root = styled('div')`
  width: ${props => (props.isFullscreen ? '100%' : '1280px')};
  height: ${props => (props.isFullscreen ? '100%' : '720px')};
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
    this.props.videoInit(this.props.url);
  }
});

const Player = ({ showControls, onMouseMove, onSetElement, isFullscreen }) => (
  <Root onMouseMove={onMouseMove} isFullscreen={isFullscreen}>
    <Video controls={false} innerRef={onSetElement} />
    {showControls && <Controls />}
  </Root>
);

Player.propTypes = {
  showControls: PropTypes.bool,
  onMouseMove: PropTypes.func,
  onSetElement: PropTypes.func,
  isFullscreen: PropTypes.bool
};

Player.defaultProps = {
  showControls: true,
  onMouseMove: () => {},
  onSetElement: () => {},
  isFullscreen: false
};

const mapStateToProps = createStructuredSelector({
  videoEl: getVideoEl,
  isFullscreen: getFullscreen,
  showControls: getShowControls
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onMouseMove: showHideControls,
      onSetElement: setVideoEl,
      videoInit
    },
    dispatch
  );

export { Player }; // for Tests

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  InitVideoElement,
  onlyUpdateForKeys(['showControls', 'isFullscreen'])
)(Player);
