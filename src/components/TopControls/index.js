import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const TopControls = ({ title }) =>
  <Root>
    <Title title={title} />
  </Root>

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px 100px 60px -35px black;
`

export default TopControls