import React from 'react'
import styled from 'styled-components'

export const FlexColumns = ({ children }) =>
  <Root>
    {children}
  </Root>

const flexCommon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const LeftColumn = flexCommon.extend`
  justify-content: flex-start;
`

export const RightColumn = flexCommon.extend`
  justify-content: flex-end;
`
