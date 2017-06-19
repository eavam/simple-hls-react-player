import React from 'react'
import PropTypes from 'prop-types'
import PlayIcon from '../../svg-icons/PlayIcon'
import PauseIcon from '../../svg-icons/PauseIcon'

const PlayPauseControl = ({ isPause, onClick }) => {
  return (
    <div className='player-svg-icon icon-margin-right' onClick={onClick} >
      { isPause
        ? <PlayIcon />
        : <PauseIcon />
      }
    </div>
  )
}

PlayPauseControl.propTypes = {
  isPause: PropTypes.bool,
  onClick: PropTypes.func,
}

export default PlayPauseControl