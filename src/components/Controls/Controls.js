// @flow
import React from 'react';
import { Root, Title, BottomBar, LeftColumn, RightColumn } from './ControlsElements';
import PlayPauseControl from '../PlayPauseControl';
import SoundControl from '../SoundControl';
import CurrentTime from '../CurrentTime';
import Fullscreen from '../Fullscreen';

type Props = {
  title?: string,
};

const Controls = ({ title }: Props) => (
  <Root>
    <Title>{title}</Title>
    <BottomBar>
      <LeftColumn>
        <PlayPauseControl />
        <SoundControl />
      </LeftColumn>

      <RightColumn>
        <CurrentTime />
        <Fullscreen />
      </RightColumn>
    </BottomBar>
  </Root>
);

Controls.defaultProps = {
  title: '',
};

export default Controls;
