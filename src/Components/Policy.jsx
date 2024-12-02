import React from 'react'
import PolicyParts from './PolicyParts'
import Policy1 from '../assets/policy1.png'
import Policy2 from '../assets/policy2.png'
import Policy3 from '../assets/policy3.png'
import Policy4 from '../assets/policy4.png'
import Flex from './Flex'

const Policy = () => {
  return (
    <>
    <div className="">
            <Flex className={'gap-x-12 items-center'}>
                <PolicyParts imgSrc={Policy1} text1={'High Quality'} text2={'crafted from top materials'}/>
                <PolicyParts imgSrc={Policy2} text1={'Warranty Protection'} text2={'Over 2 years'}/>
                <PolicyParts imgSrc={Policy3} text1={'Free Shipping'} text2={'Order over 150 $'}/>
                <PolicyParts imgSrc={Policy4} text1={'24 / 7 Support'} text2={'Dedicated support'}/>
            </Flex>
    </div>
    </>
  )
}

export default Policy