import React from 'react'
import Flex from './Flex'
import { HiMiniAdjustmentsHorizontal } from 'react-icons/hi2'
import Text from './Text'
import { BsGridFill } from 'react-icons/bs'
import { LuGalleryVertical } from 'react-icons/lu'
import { PiLineVerticalBold } from 'react-icons/pi'

const FilterBox = () => {
  return (
   <>
   <div className="py-5   ">
        <Flex className={'items-center'}>
          <div className="w-1/2">
              <Flex className={'items-center gap-x-10'}>
                <div className="flex items-center gap-x-6">
                <HiMiniAdjustmentsHorizontal className='text-2xl'/>
                <Text as={'p'} text={'Filter'} className={'text-xl font-Pop  text-black'}/>
                </div>
                <BsGridFill className='text-xl'/>
                <LuGalleryVertical className='text-2xl'/>
                <PiLineVerticalBold className='text-3xl text-Footer' />
                <Text as={'p'} text={'Showing 1–16 of 32 results'} className={'text-base font-Pop text-black'}/>
              </Flex>
          </div>
          <div className="w-1/2">
            <Flex className={'items-center justify-end gap-x-10'}>
                <Flex className={'items-center justify-end gap-x-6'}>
                    <Text as={'p'} text={'Show'} className={'text-xl font-Pop text-black'}/>
                    <Text as={'p'} text={'12'} className={'text-xl font-Pop text-Footer py-4 px-5 bg-white'}/>
                </Flex>
                <Flex className={'items-center justify-end gap-x-6'}>
                    <Text as={'p'} text={'Short by'} className={'text-xl font-Pop text-black'}/>
                    <Text as={'p'} text={'Default'} className={'text-xl font-Pop text-Footer py-4 pl-5 pr-28 bg-white'}/>
                </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
   </>
  )
}

export default FilterBox