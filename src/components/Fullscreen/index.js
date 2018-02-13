import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { baseIcon } from '../styledComponens';
import { FullIcon, WindowIcon } from '../svg-icons';

const Root = styled('div')`
  ${baseIcon};
  margin-left: 20px;
`;

const Fullsreen = ({ isFullscreen, onClick }) => (
  <Root onClick={onClick}>{isFullscreen ? <WindowIcon /> : <FullIcon />}</Root>
);

Fullsreen.propTypes = {
  isFullscreen: PropTypes.bool,
  onClick: PropTypes.func
};

Fullsreen.defaultProps = {
  isFullscreen: false,
  onClick: () => {}
};

export default Fullsreen;
