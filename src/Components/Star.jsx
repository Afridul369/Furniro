import React from 'react'
import Flex from './Flex'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const Star = () => {
  return (
    <>
    <Flex className={'gap-x-2'}>
        <FaStar className='text-xl text-starbg'/>
        <FaStar className='text-xl text-starbg'/>
        <FaStar className='text-xl text-starbg'/>
        <FaStar className='text-xl text-starbg'/>
        <FaStarHalf className='text-xl text-starbg'/>
    </Flex>
    </>
  )
}

export default Star