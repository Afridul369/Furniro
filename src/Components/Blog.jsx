import React from 'react'
import Image from './Image'
import Blogimg from '.././assets/blogimg.png'
import Container from './Container'
import Flex from './Flex'
import Blogimg1 from '../assets/blogimg1.png'
import Blogimg2 from '../assets/blogimg2.png'
import Blogimg3 from '../assets/blogimg3.png'
import { FaCalendar, FaTag, FaUser } from 'react-icons/fa'
import Text from './Text'

const Blog = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={Blogimg} imgAlt={'Blogimg'} className={'w-full'}/>
        <div className="py-24 ">
            <Container>
                <Flex>
                    <div className="w-2/3 ">
                        <div className="mb-12">
                            <Image imgSrc={Blogimg1} imgAlt={'Blogimg1'}/>
                            <Flex className={'items-center gap-x-8 py-3'}>
                                <Flex className={'items-center'}>
                                    <FaUser className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Admin'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaCalendar  className='text-base text-Footer'/>
                                    <Text as={'p'} text={'14 Oct 2022'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaTag   className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Wood'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                            </Flex>
                            <Text as={'h1'} text={'Going all-in with millennial design'} className={'text-[30px]  font-Pop font-medium text-black mb-5'}/>
                            <Text as='p' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} className={'text-[15px] font-Pop text-Footer mb-7 pr-5 '}/>
                            <Text as={'p'} text={'Read More'} className={'text-base font-Pop text-black border-b border-black inline-block pb-2'}/>
                        </div>
                        <div className="mb-12">
                            <Image imgSrc={Blogimg2} imgAlt={'Blogimg2'}/>
                            <Flex className={'items-center gap-x-8 py-3'}>
                                <Flex className={'items-center'}>
                                    <FaUser className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Admin'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaCalendar  className='text-base text-Footer'/>
                                    <Text as={'p'} text={'14 Oct 2022'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaTag   className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Handmade'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                            </Flex>
                            <Text as={'h1'} text={'Exploring new ways of decorating'} className={'text-[30px]  font-Pop font-medium text-black mb-5'}/>
                            <Text as='p' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} className={'text-[15px] font-Pop text-Footer mb-7 pr-5 '}/>
                            <Text as={'p'} text={'Read More'} className={'text-base font-Pop text-black border-b border-black inline-block pb-2'}/>
                        </div>
                        <div className="mb-12">
                            <Image imgSrc={Blogimg3} imgAlt={'Blogimg3'}/>
                            <Flex className={'items-center gap-x-8 py-3'}>
                                <Flex className={'items-center'}>
                                    <FaUser className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Admin'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaCalendar  className='text-base text-Footer'/>
                                    <Text as={'p'} text={'14 Oct 2022'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                                <Flex className={'items-center'}>
                                    <FaTag   className='text-base text-Footer'/>
                                    <Text as={'p'} text={'Wood'} className={'text-base font-Pop text-Footer ml-2'}/>
                                </Flex>
                            </Flex>
                            <Text as={'h1'} text={'Handmade pieces that took time to make'} className={'text-[30px]  font-Pop font-medium text-black mb-5'}/>
                            <Text as='p' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} className={'text-[15px] font-Pop text-Footer mb-7 pr-5 '}/>
                            <Text as={'p'} text={'Read More'} className={'text-base font-Pop text-black border-b border-black inline-block pb-2'}/>
                        </div>
                    </div>
                    <div className="w-1/3">
                        
                    </div>
                </Flex>
            </Container>
        </div>
    </div>
    </>
  )
}

export default Blog