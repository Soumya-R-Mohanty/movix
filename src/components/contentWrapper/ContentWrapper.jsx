import React from 'react'
import "./style.scss"

function ContentWrapper({children}) {
  return (
    <div className='ContentWrapper'>
        {children}
    </div>
  )
}

export default ContentWrapper