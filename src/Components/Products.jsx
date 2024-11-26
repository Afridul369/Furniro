import React from 'react'
import Image from './Image'
import Badge from './Badge'
import Text from './Text'
import Flex from './Flex'
import { IoMdShare } from 'react-icons/io'
import { MdCompareArrows } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'

const Products = ({imgSrc,imgAlt,icon,text2,text3,text4,text5,backgroundBG}) => {
  return (
   <>
   <div className="mb-8">
        <div className="relative overflow-y-hidden group w-[100%]">
            <Image imgSrc={imgSrc} imgAlt={imgAlt} />
            {icon}
            <div className="px-4 pt-4 pb-8 bg-productbg">
                <Text as={'h1'} text={text2} className={'text-2xl font-Pop font-semibold text-Protext mb-2'}/>
                <Text as={'h1'} text={text3} className={'text-base font-Pop font-medium text-protext2 mb-2'}/>
                    <Flex className={'gap-x-3 items-center'}>
                        <Text as={'h1'} text={text4} className={'text-[20px] font-Pop font-semibold text-Protext '}/>
                        <Text as={'h1'} text={text5} className={'text-base font-Pop  text-protext3 '}/>
                    </Flex>
            </div>
            <div className="absolute bottom-[-460px] right-0 group-hover:bottom-0 duration-500 h-full w-full  bg-[#656565]/75">
                <div className="py-[180px] ">
                    <div className="px-12">
                        <div className="py-3 text-center bg-white mb-6">
                            <Text as={'h1'} text={'Add to cart'} className={'text-base font-Pop font-semibold text-Hovertext1 '}/>
                        </div>                    
                    </div>
                    <div className="px-7">
                        <Flex className={'justify-between'}>
                            <Flex className={'items-center gap-x-1 text-white'}>
                                 <IoMdShare />
                                 <Text as={'h1'} text={'Share'} className={'text-base font-Pop font-semibold text-white'}/>
                            </Flex>
                            <Flex className={'items-center gap-x-1 text-white'}>
                                 <MdCompareArrows />
                                 <Text as={'h1'} text={'Compare'} className={'text-base font-Pop font-semibold text-white'}/>
                            </Flex>
                            <Flex className={'items-center gap-x-1 text-white'}>
                                <FaRegHeart />
                                <Text as={'h1'} text={'Like'} className={'text-base font-Pop font-semibold text-white'}/>
                            </Flex>   
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </>
  )
}

export default Products