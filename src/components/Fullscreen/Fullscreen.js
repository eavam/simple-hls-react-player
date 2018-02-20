// @flow
import React from 'react';
import styled from 'react-emotion';
import withConnect from '../../hocs/withConnect';
import { baseIcon } from '../styledComponens';
import { FullIcon, WindowIcon } from '../svg-icons';

import { toggleFullscreen } from '../../actionTypes';

const Root = styled('div')`
  ${baseIcon};
  margin-left: 20px;
`;

type Props = { isFullscreen?: boolean, onClick?: () => void };

export const Fullscreen = ({ isFullscreen, onClick }: Props) => (
  <Root onClick={onClick}>{isFullscreen ? <WindowIcon /> : <FullIcon />}</Root>
);

Fullscreen.defaultProps = {
  isFullscreen: false,
  onClick: () => {},
};

export default withConnect(['isFullscreen'], { onClick: toggleFullscreen })(Fullscreen);
