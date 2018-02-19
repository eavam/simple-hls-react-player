import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { compose } from 'recompose';
import withVideoElement from '../../hocs/withVideoElement';
import withPlayerConnect from '../../hocs/withPlayerConnect';
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

const Player = ({ showControls, onMouseMove, isFullscreen, title, innerRef }) => (
  <Root onMouseMove={onMouseMove} isFullscreen={isFullscreen} showControls={showControls}>
    <Video controls={false} innerRef={innerRef} />
    {showControls && <Controls title={title} />}
  </Root>
);

Player.propTypes = {
  title: PropTypes.string.isRequired,
  showControls: PropTypes.bool,
  onMouseMove: PropTypes.func,
  isFullscreen: PropTypes.bool,
  innerRef: PropTypes.func.isRequired,
};

Player.defaultProps = {
  showControls: true,
  onMouseMove: () => {},
  isFullscreen: false,
};

const enhance = compose(withPlayerConnect, withVideoElement);

export default enhance(Player);
