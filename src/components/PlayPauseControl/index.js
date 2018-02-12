import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { baseIcon } from '../styledComponens';
import { PlayIcon, PauseIcon } from '../svg-icons';

const PlayPauseControl = ({ isPause, onClick }) => (
  <Root onClick={onClick}>{isPause ? <PlayIcon /> : <PauseIcon />}</Root>
);

PlayPauseControl.propTypes = {
  isPause: PropTypes.bool,
  onClick: PropTypes.func
};

PlayPauseControl.defaultProps = {
  isPause: false,
  onClick: () => {}
};

const Root = styled('div')`
  ${baseIcon};
  margin-right: 20px;
`;

export default PlayPauseControl;
