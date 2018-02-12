import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ viewBox, className, children }) => (
  <svg viewBox={viewBox} className={className}>
    {children}
  </svg>
);

SvgIcon.propTypes = {
  viewBox: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};

SvgIcon.defaultProps = {
  className: '',
  viewBox: ''
};

export default SvgIcon;
