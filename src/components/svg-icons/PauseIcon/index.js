import React from 'react'
import { pure } from 'recompose'
import SvgIcon from '../../SvgIcon'

let PauseIcon = () =>
  <SvgIcon viewBox="0 0 20.03 25">
    <path
      fill="#fff"
      d="M7 21.52a3.48 3.48 0 0 1-7 0v-18a3.48 3.48 0 1 1 7 0zm0 0M20 21.52a3.48 3.48 0 0 1-7 0v-18a3.48 3.48 0 0 1 7 0zm0 0"
    />
  </SvgIcon>

PauseIcon = pure(PauseIcon)

export default PauseIcon
