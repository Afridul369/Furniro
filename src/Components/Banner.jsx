import React from 'react'
import Image from './Image'
import BannerBG from '../assets/bannerbg.jpg'

const Banner = () => {
  return (
    
  <>
  <Image imgSrc={BannerBG} imgAlt={'BannerBG'} className={'w-full h-full pb-8'}/>
  </>
  )
}

export default Banner