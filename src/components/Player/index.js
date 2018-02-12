import React from 'react';
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import VideoTag from '../VideoTag';

const Player = ({ showControls, onMouseMove, setVideoEl, isFullscreen }) => (
  <Root onMouseMove={onMouseMove} isFullscreen={isFullscreen}>
    <VideoTag setVideoEl={setVideoEl} />
    {showControls && <Controls />}
  </Root>
);

Player.propTypes = {
  showControls: PropTypes.bool,
  onMouseMove: PropTypes.func,
  setVideoEl: PropTypes.func,
  isFullscreen: PropTypes.bool
};

Player.defaultProps = {
  showControls: true,
  onMouseMove: () => {},
  setVideoEl: () => {},
  isFullscreen: false
};

const Root = styled.div`
  width: ${props => (props.isFullscreen ? '100%' : '1280px')};
  height: ${props => (props.isFullscreen ? '100%' : '720px')};
  margin: 0 auto;
  position: relative;
`;

export default onlyUpdateForKeys(['showControls', 'isFullscreen'])(Player);
