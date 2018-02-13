import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { flexContainer, flexLeft, flexRight } from '../styledComponens';
import PlayPauseControl from '../PlayPauseControl';
import SoundControl from '../SoundControl';
import CurrentTime from '../CurrentTime';
import Fullscreen from '../Fullscreen';

const Root = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Title = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px 100px 60px -35px black;
  color: #fff;
  font-size: 30px;
`;

const Bottom = styled('div')`
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

const Controls = ({
  title,
  isFullscreen,
  typeActionPlayer,
  volume,
  muted,
  time,
  togglePause,
  toggleMute,
  handleChangeVolume,
  toggleFullscreen,
}) => (
  <Root>
    <Title>{title}</Title>
    <Bottom>
      <div className={flexLeft}>
        <PlayPauseControl typeActionPlayer={typeActionPlayer} onClick={togglePause} />
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
    </Bottom>
  </Root>
);

Controls.propTypes = {
  title: PropTypes.string,
  isFullscreen: PropTypes.bool,
  typeActionPlayer: PropTypes.oneOf(['play', 'pause']).isRequired,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  time: PropTypes.string,
  togglePause: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  handleChangeVolume: PropTypes.func.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  title: '',
  isFullscreen: false,
  volume: 0,
  muted: false,
  time: '00:00',
};

export default Controls;
