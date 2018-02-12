import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexColumns, LeftColumn, RightColumn } from '../../layout/FlexColumns';
import PlayPauseControl from '../PlayPauseControl';
import SoundControl from '../SoundControl';
import CurrentTime from '../CurrentTime';
import Fullscreen from '../Fullscreen';

const Root = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  display: flex;
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
    <FlexColumns>
      <LeftColumn>
        <PlayPauseControl isPause={isPause} onClick={togglePause} />
        <SoundControl
          onMouseDown={handleChangeVolume}
          onClick={toggleMute}
          volume={volume}
          muted={muted}
        />
      </LeftColumn>

      <RightColumn>
        <CurrentTime time={time} />
        <Fullscreen isFullscreen={isFullscreen} onClick={toggleFullscreen} />
      </RightColumn>
    </FlexColumns>
  </Root>
);

BottomControls.propTypes = {
  isFullscreen: PropTypes.bool,
  isPause: PropTypes.bool,
  volume: PropTypes.string,
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
  volume: '0',
  muted: false,
  time: '00:00'
};

export default BottomControls;
