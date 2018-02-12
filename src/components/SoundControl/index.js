import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { baseIcon } from '../styledComponens';
import { SoundIcon, OffIcon } from '../svg-icons';

const SoundControl = ({ volume, muted, onClick, onMouseDown }) => (
  <Root>
    <div className={baseIcon} onClick={onClick} role="presentation">
      {muted ? <OffIcon /> : <SoundIcon />}
    </div>
    <VolumeControl onMouseDown={onMouseDown} muted={muted} volume={volume} />
  </Root>
);

SoundControl.propTypes = {
  volume: PropTypes.number,
  muted: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func
};

SoundControl.defaultProps = {
  volume: 0,
  muted: false,
  onClick: () => {},
  onMouseDown: () => {}
};

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

export default SoundControl;
