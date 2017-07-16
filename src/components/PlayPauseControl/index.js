import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../globalStyled.js'
import { PlayIcon, PauseIcon } from '../svg-icons'

const PlayPauseControl = ({ isPause, onClick }) =>
  <Root onClick={onClick}>
    {isPause ? <PlayIcon /> : <PauseIcon />}
  </Root>

PlayPauseControl.propTypes = {
  isPause: PropTypes.bool,
  onClick: PropTypes.func
}

const Root = Icon.extend`
  margin-right: 20px;
`

export default PlayPauseControl
