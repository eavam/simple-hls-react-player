import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { FullIcon, WindowIcon } from '../svg-icons';

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

const Root = Icon.extend`
  margin-left: 20px;
`;

export default Fullsreen;
