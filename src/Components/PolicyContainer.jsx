import React from 'react'

const PolicyContainer = ({className,children}) => {
  return (
    <div className={`max-w-PolicyContainer mx-auto ${className}`}>{children}</div>
  )
}

export default PolicyContainer