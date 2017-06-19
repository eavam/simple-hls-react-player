import React from 'react'
import './styles.css'

const ControlsWrapper = ({children}) => {
  return (
    <div className='controls-wrapper' >
      {children}
    </div>
  )
}

export default ControlsWrapper