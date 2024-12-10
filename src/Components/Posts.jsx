import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'

const Posts = ({posts,className,title,date}) => {
  return (
    <>
    <div className={`w-[212px] mb-9 ${className}`}>
        <Flex className={'gap-x-3 items-center'}>
            <Image imgSrc={posts} imgAlt={''}/>
            <div className="py-1 ">
                <Text as='p' text={title} className='text-sm font-Pop text-black mb-1'/>
                <Text as='p' text={date} className='text-xs font-Pop text-Footer'/>     
            </div>
        </Flex>
    </div>
    </>
  )
}

export default Posts