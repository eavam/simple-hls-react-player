import React from 'react'
import PropTypes from 'prop-types'
import SoundIcon from '../../svg-icons/SoundIcon'
import OffIcon from '../../svg-icons/OffIcon'

import './styles.css'

const SoundControl = ({ volume, muted, toggleMute, handleChangeVolume }) => {
  
  const shadow = {
    boxShadow: `inset ${muted ? 0 : volume}px 0px 0 #fff`
  }

  return (
    <div className='sound-control'>
      <div className='player-svg-icon' onClick={toggleMute} >
        { muted
          ? <OffIcon />
          : <SoundIcon />
        }
      </div>
      <div className='volume-control' onMouseDown={handleChangeVolume} style={shadow} />
    </div>
  )
}

SoundControl.propTypes = {
  volume: PropTypes.string,
  muted: PropTypes.bool,
  toggleMute: PropTypes.func,
  handleChangeVolume: PropTypes.func,
}

export default SoundControl