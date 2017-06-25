import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../../globalStyled.js'
import { SoundIcon, OffIcon } from '../svg-icons'

const SoundControl = ({ volume, muted, onClick, onMouseDown }) => 
  <Root>
    <Icon onClick={onClick} >
      {
        muted
          ? <OffIcon />
          : <SoundIcon />
      }
    </Icon>
    <VolumeControl onMouseDown={onMouseDown} muted={muted} volume={volume} />
  </Root>


SoundControl.propTypes = {
  volume: PropTypes.string,
  muted: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
}

const Root = styled.div`
  display: flex;
  align-items: center;
`
const VolumeControl = styled.div`
  position: relative;
  cursor: pointer;
  height: 5px;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset ${props => props.muted ? 0 : props.volume}px 0px 0 #fff;
`

export default SoundControl