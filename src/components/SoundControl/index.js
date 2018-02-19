// @flow
import React from 'react';
import styled from 'react-emotion';
import { baseIcon } from '../styledComponens';
import { SoundIcon, OffIcon } from '../svg-icons';

const Root = styled('div')`
  display: flex;
  align-items: center;
`;
const VolumeControl = styled('div')`
  position: relative;
  cursor: pointer;
  height: 5px;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset ${props => (props.muted ? 0 : props.volume)}px 0px 0 #fff;
`;

type Props = {
  volume?: number,
  muted?: boolean,
  onClick?: () => void,
  onMouseDown?: () => void,
};

const SoundControl = ({ volume, muted, onClick, onMouseDown }: Props) => (
  <Root>
    <div className={baseIcon} onClick={onClick} role="presentation">
      {muted ? <OffIcon /> : <SoundIcon />}
    </div>
    <VolumeControl onMouseDown={onMouseDown} muted={muted} volume={volume} />
  </Root>
);

SoundControl.defaultProps = {
  volume: 0,
  muted: false,
  onClick: () => {},
  onMouseDown: () => {},
};

export default SoundControl;
