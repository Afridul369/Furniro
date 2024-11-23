import React from 'react'
import Image from './Image'
import Text from './Text'


const BrowseCard = ({imgSrc,imgAlt,text}) => {
  return (
    <>
    <div className="">
        <Image imgSrc={imgSrc} imgAlt={imgAlt} className={'mb-8'}/>
        <div className="text-center">
            <Text as={'p'} text={text} className={'text-2xl font-Pop font-semibold text-h1Text'}/>
        </div>
    </div>
    </>
  )
}

export default BrowseCard