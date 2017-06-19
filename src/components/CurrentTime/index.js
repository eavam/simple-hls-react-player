import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const CurrentTime = ({ time }) => {
  return (
    <div className='current-time'>{time}</div>
  )
}

CurrentTime.propTypes = {
  time: PropTypes.string,
}

export default CurrentTime