// @flow
import React from 'react';
import styled from 'react-emotion';

import withConnect from '../../hocs/withConnect';
import { togglePause } from '../../actionTypes';
import { baseIcon } from '../styledComponens';
import { PlayIcon, PauseIcon } from '../svg-icons';

const Root = styled('div')`
  ${baseIcon};
  margin-right: 20px;
`;

type Props = {
  typeActionPlayer: 'play' | 'pause',
  onClick?: () => void,
};

export const PlayPauseControl = ({ typeActionPlayer, onClick }: Props) => (
  <Root onClick={onClick}>{typeActionPlayer === 'pause' ? <PlayIcon /> : <PauseIcon />}</Root>
);

PlayPauseControl.defaultProps = {
  onClick: () => {},
};

export default withConnect(['typeActionPlayer'], { onClick: togglePause })(PlayPauseControl);
