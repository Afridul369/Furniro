import React from 'react'

const Button1 = ({className,texts}) => {
  return (
    <>
    <div className="">
        <div className={`${className} w-[200px]  text-center border border-Hovertext1 hover:bg-Hovertext1 hover:text-white duration-500 py-3 px-10 text-base font-Pop font-semibold text-Hovertext1`}>{texts}</div>
    </div>
    </>
  )
}

export default Button1