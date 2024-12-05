import React from 'react'

const Button2 = ({className,text}) => {
  return (
    <>
    <div className={`${className} py-4 px-12 border-2 border-black hover:border-Footer duration-300 rounded-2xl`}>{text}</div>
    </>
  )
}

export default Button2