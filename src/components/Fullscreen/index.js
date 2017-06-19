import React from 'react'
import PropTypes from 'prop-types'
import FullIcon from '../../svg-icons/FullIcon'
import WindowIcon from '../../svg-icons/WindowIcon'

const Fullsreen = ({ isFullscreen, toggleFullscreen }) => {
  return (
    <div className='player-svg-icon icon-margin-left' onClick={toggleFullscreen} >
      { isFullscreen
        ? <WindowIcon />
        : <FullIcon />
      }
    </div>
  )
}

Fullsreen.propTypes = {
  isFullscreen: PropTypes.bool,
  toggleFullscreen: PropTypes.func,
}

export default Fullsreen