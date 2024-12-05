import React from 'react'
import Image from './Image'
import Comparisonimg from '../assets/comparisonimg.png'

const Comparison = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={Comparisonimg} imgAlt={'Comparisonimg'} className={'w-full'}/>
    </div>
    </>
  )
}

export default Comparison