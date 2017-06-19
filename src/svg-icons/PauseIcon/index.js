import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../../components/SvgIcon'

const PauseIcon = ({ className }) => (
  <SvgIcon viewBox="0 0 20.03 25" className={className}>
    <path fill='#fff' d="M7 21.52a3.48 3.48 0 0 1-7 0v-18a3.48 3.48 0 1 1 7 0zm0 0M20 21.52a3.48 3.48 0 0 1-7 0v-18a3.48 3.48 0 0 1 7 0zm0 0"/>
  </SvgIcon>
)

PauseIcon.propTypes = {
  className: PropTypes.string,
}

export default PauseIcon