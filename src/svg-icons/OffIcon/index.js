import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../../components/SvgIcon'

const OffIcon = ({ className }) => (
  <SvgIcon viewBox="0 0 27 27" className={className}>
    <path fill='#fff' d="M20.45 3.13a1.64 1.64 0 0 0-2.66-1.29L12.52 6a3.19 3.19 0 0 0-.9-.13H9.37l11.08 11.04zM3 9v9.36a3.21 3.21 0 0 0 3.21 3.21h5.41a3.22 3.22 0 0 0 .78-.1l5.39 4.23a1.64 1.64 0 0 0 2.66-1.3V24L3.62 7.16A3.18 3.18 0 0 0 3 9zm23.71 16.29l-25-25A1 1 0 0 0 .29 1.71l25 25a1 1 0 0 0 1.41-1.41z" />
  </SvgIcon>
)

OffIcon.propTypes = {
  className: PropTypes.string,
}

export default OffIcon