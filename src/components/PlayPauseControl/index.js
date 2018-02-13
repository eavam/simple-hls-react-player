import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { baseIcon } from '../styledComponens';
import { PlayIcon, PauseIcon } from '../svg-icons';

const Root = styled('div')`
  ${baseIcon};
  margin-right: 20px;
`;

const PlayPauseControl = ({ typeActionPlayer, onClick }) => (
  <Root onClick={onClick}>{typeActionPlayer === 'pause' ? <PlayIcon /> : <PauseIcon />}</Root>
);

PlayPauseControl.propTypes = {
  typeActionPlayer: PropTypes.oneOf(['play', 'pause']).isRequired,
  onClick: PropTypes.func,
};

PlayPauseControl.defaultProps = {
  onClick: () => {},
};

export default PlayPauseControl;
