import React from 'react'
import Image from './Image'
import Checkoutimg from '../assets/checkoutimg.png'

const Checkout = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={Checkoutimg} imgAlt={'Checkoutimg'} className={'w-full'}/>
    </div>
    </>
  )
}

export default Checkout