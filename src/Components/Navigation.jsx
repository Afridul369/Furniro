import React from 'react'

const Navigation = ({className,texts}) => {
  return (
    <>
     <li className={`text-base font-medium font-Pop text-black mb-12 ${className}`}>{texts}</li>
    </>
  )
}

export default Navigation