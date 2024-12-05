import React from 'react'

const ContactContainer = ({className,children}) => {
  return (
    <>
    <div className={`max-w-ContactContainer mx-auto ${className}`}>{children}</div>
    </>
  )
}

export default ContactContainer