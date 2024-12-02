import React from 'react'
import Image from './Image'
import Policy1 from '../assets/policy1.png'
import Flex from './Flex'
import Text from './Text'
import Container from './Container'

const PolicyParts = ({imgSrc,text1,text2,imgAlt}) => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-3 items-center'}>
            <Image imgSrc={imgSrc} imgAlt={imgAlt} className={''}/>
            <div className="">
                <Text as={'h1'} text={text1} className={'text-[25px] font-Pop font-semibold text-policytext'}/>
                <Text as={'h1'} text={text2} className={'text-xl font-Pop  font-medium text-protext2'}/>
            </div>
        </Flex>
       
    </div>
    </>
  )
}

export default PolicyParts