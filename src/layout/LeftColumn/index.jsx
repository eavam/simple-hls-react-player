import React from 'react'

import './styles.css'

const LeftColumn = ({ children }) => {
  return (
    <div className='left-column'>
      {children}
    </div>
  )
}

export default LeftColumn