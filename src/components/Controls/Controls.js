// @flow
import React from 'react';
import withControlsConnect from '../../hocs/withControlsConnect';
import { Root, Title, BottomBar, LeftColumn, RightColumn } from './ControlsElements';
import PlayPauseControl from '../PlayPauseControl';
import SoundControl from '../SoundControl';
import CurrentTime from '../CurrentTime';
import Fullscreen from '../Fullscreen';

type Props = {
  title?: string,
  isFullscreen?: boolean,
  volume?: number,
  muted?: boolean,
  time?: string,
  typeActionPlayer: 'play' | 'pause',
  onClickPlay: ?() => void,
  onClickMute: ?() => void,
  onChangeVolume: ?() => void,
  onClickFullScreen: ?() => void,
};

const Controls = ({
  title,
  isFullscreen,
  typeActionPlayer,
  volume,
  muted,
  time,
  onClickPlay,
  onClickMute,
  onChangeVolume,
  onClickFullScreen,
}: Props) => (
  <Root>
    <Title>{title}</Title>
    <BottomBar>
      <LeftColumn>
        <PlayPauseControl typeActionPlayer={typeActionPlayer} onClick={onClickPlay} />
        <SoundControl
          onMouseDown={onChangeVolume}
          onClick={onClickMute}
          volume={volume}
          muted={muted}
        />
      </LeftColumn>

      <RightColumn>
        <CurrentTime time={time} />
        <Fullscreen isFullscreen={isFullscreen} onClick={onClickFullScreen} />
      </RightColumn>
    </BottomBar>
  </Root>
);

Controls.defaultProps = {
  title: '',
  isFullscreen: false,
  volume: 0,
  muted: false,
  time: '00:00',
};

export default withControlsConnect(Controls);
