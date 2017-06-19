import React from 'react'

import './styles.css'

const RightColumn = ({ children }) => {
  return (
    <div className='right-column'>
      {children}
    </div>
  )
}

export default RightColumn