import React from 'react'
import styled from 'styled-components'
import { onlyUpdateForKeys } from 'recompose'
import Controls from '../Controls'
import VideoTag from '../VideoTag'

const Player = ({ showControls, onMouseMove, setVideoEl }) =>
  <Root onMouseMove={onMouseMove}>
    <VideoTag setVideoEl={setVideoEl} />
    {showControls && <Controls />}
  </Root>

const Root = styled.div`
  width: ${props => (props.isFullscreen ? '100%' : '1280px')};
  height: ${props => (props.isFullscreen ? '100%' : '720px')};
  margin: 0 auto;
  position: relative;
`

export default onlyUpdateForKeys(['showControls'])(Player)
