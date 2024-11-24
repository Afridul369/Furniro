import React from 'react'

const Badge = ({text,className,bg}) => {
  return (
    <>
    <div className="">
        <div className={`h-[48px] w-[48px] flex items-center justify-center ${bg} rounded-full text-base font-medium font-Pop text-white ${className}`}>{text}</div>
    </div>
    </>
  )
}

export default Badge