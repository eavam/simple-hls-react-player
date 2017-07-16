import React from 'react'
import styled from 'styled-components'
import { shouldUpdate } from 'recompose'

export const VideoTag = ({ setVideoEl }) => <Video controls={false} innerRef={setVideoEl} />

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: black;
`

export default shouldUpdate(() => false)(VideoTag)
