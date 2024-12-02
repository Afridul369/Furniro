import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Gallery3 from '../assets/gallery3.png'
import Gallery4 from '../assets/gallery4.png'
import Gallery5 from '../assets/gallery5.png'
import Text from './Text'
import Star from './Star'
import { PiLineVertical } from 'react-icons/pi'

const ProductGallery = () => {
  return (
    <>
    <div className="py-16">
        <Container >
            <Flex className={'justify-between'}>
                <div className="">
                    <Flex>
                        <div className="">
                            <Image imgSrc={Gallery1} imgAlt={'Gallery1'} className={'mb-7'}/>
                            <Image imgSrc={Gallery2} imgAlt={'Gallery2'} className={'mb-7'}/>
                            <Image imgSrc={Gallery3} imgAlt={'Gallery3'} className={'mb-7'}/>
                            <Image imgSrc={Gallery4} imgAlt={'Gallery4'} className={'mb-7'}/>
                        </div>
                        <Image imgSrc={Gallery5} imgAlt={'Gallery5'}/>
                    </Flex>
                </div>
                <div className="pl-[72px]">
                    <Text as={'h1'} text={'Asgaard Sofa'} className={'text-[42px] font-Pop  text-black mb-2'}/>
                    <Text as={'h1'} text={'Rs. 250,000.00'} className={'text-2xl font-Pop font-medium text-Footer mb-4'}/>
                    <Flex className={'gap-x-5 items-center mb-4'}>
                        <Star/>
                        <PiLineVertical className='text-3xl text-Footer'/>
                        <Text as={'p'} text={'5 Customer Review'} className={'text-[13px] font-Pop  text-Footer'}/>
                    </Flex>
                    <Text as='p' text={'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.'} className={'text-[13px] font-Pop text-black mb-4'}/>
                    <Text as='p' text='Size' className={'text-sm font-Pop text-Footer mb-4'}/>
                    <Flex className={'gap-x-4'}>
                        <Text as={'p'} text={'L'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-4 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                        <Text as={'p'} text={'XL'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-3 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                        <Text as={'p'} text={'XS'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-3 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ProductGallery