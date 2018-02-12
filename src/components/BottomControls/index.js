import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { flexContainer, flexLeft, flexRight } from '../styledComponens';
import PlayPauseControl from '../PlayPauseControl';
import SoundControl from '../SoundControl';
import CurrentTime from '../CurrentTime';
import Fullscreen from '../Fullscreen';

const Root = styled('div')`
  ${flexContainer};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px -100px 60px -35px black;
`;

const BottomControls = ({
  isFullscreen,
  isPause,
  volume,
  muted,
  time,
  togglePause,
  toggleMute,
  handleChangeVolume,
  toggleFullscreen
}) => (
  <Root>
    <div className={flexLeft}>
      <PlayPauseControl isPause={isPause} onClick={togglePause} />
      <SoundControl
        onMouseDown={handleChangeVolume}
        onClick={toggleMute}
        volume={volume}
        muted={muted}
      />
    </div>

    <div className={flexRight}>
      <CurrentTime time={time} />
      <Fullscreen isFullscreen={isFullscreen} onClick={toggleFullscreen} />
    </div>
  </Root>
);

BottomControls.propTypes = {
  isFullscreen: PropTypes.bool,
  isPause: PropTypes.bool,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  time: PropTypes.string,
  togglePause: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  handleChangeVolume: PropTypes.func.isRequired,
  toggleFullscreen: PropTypes.func.isRequired
};

BottomControls.defaultProps = {
  isFullscreen: false,
  isPause: false,
  volume: 0,
  muted: false,
  time: '00:00'
};

export default BottomControls;
