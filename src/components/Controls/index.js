import React from 'react';
import styled from 'styled-components';

import TopControlsContainer from '../../containers/TopControlsContainer';
import BottomControlsContainer from '../../containers/BottomControlsContainer';

const Controls = () => (
  <Root>
    <TopControlsContainer />
    <BottomControlsContainer />
  </Root>
);

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Controls;
