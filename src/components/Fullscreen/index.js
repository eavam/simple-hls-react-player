import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../globalStyled.js'
import { FullIcon, WindowIcon } from '../svg-icons'

const Fullsreen = ({ isFullscreen, onClick }) => 
  <Root onClick={onClick} >
    { 
      isFullscreen
        ? <WindowIcon />
        : <FullIcon />
    }
  </Root>


Fullsreen.propTypes = {
  isFullscreen: PropTypes.bool,
  onClick: PropTypes.func,
}

const Root = Icon.extend`
  margin-left: 20px;
`

export default Fullsreen