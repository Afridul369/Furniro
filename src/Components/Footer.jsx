import React from 'react'
import NavContainer from './Container'
import Text from './Text'
import Navigation from './Navigation'
import Flex from './Flex'
import Image from './Image'
import Footerlogo from '../assets/footerlogo.png'

const Footer = () => {
  return (
    <>
    <div className="py-10">
        <NavContainer>
           <Flex className={' justify-between border-b-2 border-fooBorder mb-10'}>
                <div className="w-[350px]">
                    <Image imgSrc={Footerlogo} imgAlt={'footerlogo'} className={'mb-[60px]'}/>
                    <Text as={'p'} text={'400 University Drive Suite 200 Coral Gables,FL 33134 USA'} className={'text-base font-Pop text-Footer '}/>
                </div>
                <div className="">
                    <ul className="px-[72px]">
                        <Text as={'h1'} text={'Links'} className={'text-base font-Pop font-medium text-Footer mb-[60px]'}/>
                        <Navigation texts={'Home'}/>
                        <Navigation texts={'Shop'}/>
                        <Navigation texts={'About'}/>
                        <Navigation texts={'Contact'}/>
                    </ul>
                </div>
                <div className="">
                    <ul className="px-[72px]">
                        <Text as={'h1'} text={'Help'} className={'text-base font-Pop font-medium text-Footer mb-[60px]'}/>
                        <Navigation texts={'Payment Options'}/>
                        <Navigation texts={'Returns'}/>
                        <Navigation texts={'Privacy Policies'}/>
                    </ul>
                </div>
                <div className="pr-[105px]">
                    <Text as={'h1'} text={'Newsletter'} className={'text-base font-Pop font-medium text-Footer mb-[60px]'}/>  
                    <Flex className={'gap-x-8'}>
                        <input type="email" placeholder='Enter Your Email Address'  className='border-b-2 border-black text-sm font-Pop text-Footer'/>
                        <Text as={'h1'} text='SUBSCRIBE'  className='border-b-2 border-black text-sm font-Pop font-medium text-black '/>
                    </Flex>
                </div>
           </Flex>
           <Text as={'p'} text={'2023 furino. All rights reverved'} className={'text-base font-Pop text-black'}/>
        </NavContainer>
    </div>
    </>
  )
}

export default Footer