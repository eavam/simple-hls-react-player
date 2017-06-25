import React from 'react'
import { pure } from 'recompose'
import SvgIcon from '../../SvgIcon'

let SoundIcon = () => 
  <SvgIcon viewBox="0 0 17.45 24.61">
    <path fill='#fff' d="M16.52.17a1.64 1.64 0 0 0-1.73.18L9.52 4.48a3.2 3.2 0 0 0-.9-.13H3.21A3.21 3.21 0 0 0 0 7.56v9.36a3.21 3.21 0 0 0 3.21 3.21h5.41a3.22 3.22 0 0 0 .78-.1l5.39 4.23A1.64 1.64 0 0 0 17.45 23V1.64a1.64 1.64 0 0 0-.93-1.47zm0 0"/>
  </SvgIcon>

SoundIcon = pure(SoundIcon)

export default SoundIcon