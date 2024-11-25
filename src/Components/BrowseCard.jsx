import React from 'react'
import Image from './Image'
import Text from './Text'


const BrowseCard = ({imgSrc,imgAlt,text}) => {
  return (
    <>
    <div className="hover:scale-110 duration-500">
        <Image imgSrc={imgSrc} imgAlt={imgAlt} className={'mb-8 grayscale-[100%] hover:grayscale-0 duration-500 ease-in-out'}/>
        <div className="text-center">
            <Text as={'p'} text={text} className={'text-2xl font-Pop font-semibold text-h1Text'}/>
        </div>
    </div>
    </>
  )
}

export default BrowseCard