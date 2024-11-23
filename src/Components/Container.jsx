import React from 'react'

const NavContainer = ({children,className}) => {
  return (
    <div className={`max-w-Container mx-auto ${className}`}>{children}</div>
  )
}

export default NavContainer