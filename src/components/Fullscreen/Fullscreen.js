// @flow
import React from 'react';
import styled from 'react-emotion';
import { baseIcon } from '../styledComponens';
import { FullIcon, WindowIcon } from '../svg-icons';

const Root = styled('div')`
  ${baseIcon};
  margin-left: 20px;
`;

type Props = { isFullscreen?: boolean, onClick?: () => void };

const Fullsreen = ({ isFullscreen, onClick }: Props) => (
  <Root onClick={onClick}>{isFullscreen ? <WindowIcon /> : <FullIcon />}</Root>
);

Fullsreen.defaultProps = {
  isFullscreen: false,
  onClick: () => {},
};

export default Fullsreen;
