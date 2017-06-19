import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Title = ({ title }) => {
  return (
    <div className='title' >
      {title}
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title