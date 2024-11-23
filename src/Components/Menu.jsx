import React from 'react'

const Menu = ({menuname,className}) => {
  return (
    <li className={`${className} text-base font-medium font-Pop text-black`}>{menuname}</li>
  )
}

export default Menu