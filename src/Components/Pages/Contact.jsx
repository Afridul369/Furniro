import React from 'react'
import Image from '../Image'
import Contactimg from '../../assets/contactimg.png'
import Text from '../Text'
import ContactContainer from '../ContactContainer'
import Flex from '../Flex'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'
import Button1 from '../Button1'
import PolicyContainer from '../PolicyContainer'
import Policy from '../Policy'

const Contact = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={Contactimg} imgAlt={'Contactimg'} className={'w-full'}/>
        <div className="py-16">
            <div className="text-center mb-32">
                <Text as={'h1'} text={'Get In Touch With Us'} className={'text-4xl font-Pop font-semibold text-black mb-5'}/>
                <Text as={'h1'} text={'For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!'} className={'text-base font-Pop px-[630px] text-Footer '}/>
            </div>
            <ContactContainer>
                <Flex className={'items-center mb-16'}>
                    <div className="w-2/5 py-10 pl-10 pr-32">
                        <Flex className={'gap-x-6 mb-12'}>
                            <FaLocationDot className='text-5xl '/>
                            <div className="">
                                <Text as={'h1'} text={'Address'} className={'text-2xl font-Pop font-medium text-black mt-3'}/>
                                <Text as={'h1'} text={'236 5th SE Avenue, New York NY10000, United States'} className={'text-base font-Pop text-black'}/>
                            </div>
                        </Flex>
                        <Flex className={'gap-x-6 mb-12'}>
                            <FaPhoneAlt className='text-5xl '/>
                            <div className="">
                                <Text as={'h1'} text={'Phone'} className={'text-2xl font-Pop font-medium text-black '}/>
                                <Text as={'h1'} text={'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789'} className={'text-base font-Pop text-black'}/>
                            </div>
                        </Flex>
                        <Flex className={'gap-x-6 mb-12'}>
                            <BsFillClockFill className='text-4xl '/>
                            <div className="">
                                <Text as={'h1'} text={'Working Time'} className={'text-2xl font-Pop font-medium text-black '}/>
                                <Text as={'h1'} text={'Monday-Friday: 9:00 - 22:00 '} className={'text-base font-Pop text-black'}/>
                                <Text as={'h1'} text={'Saturday-Sunday: 9:00- 21:00 '} className={'text-base font-Pop text-black'}/>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-3/5 p-10 ">
                        <div className="">
                            <Text as={'p'} text={'Your Name'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='Abc' className='border border-Footer text-base text-Footer font-Pop py-6 px-6 rounded-lg w-full mb-10' />
                        </div>
                        <div className="">
                            <Text as={'p'} text={'Email address'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="email" placeholder='Abc@def.com' className='border border-Footer text-base text-Footer font-Pop py-6 px-6 rounded-lg w-full mb-10' />
                        </div>
                        <div className="">
                            <Text as={'p'} text={'Subject'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='This is an optional' className='border border-Footer text-base text-Footer font-Pop py-6 px-6 rounded-lg w-full mb-10' />
                        </div>
                        <div className="">
                            <Text as={'p'} text={'Message'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='Hi! i’d like to ask about' className='border border-Footer text-base text-Footer font-Pop pt-6 pb-20 px-6 rounded-lg w-full mb-10' />
                        </div>
                        <Button1 texts='Submit' className={'font-normal font-Pop rounded-md'}/>
                    </div>
                </Flex>
            </ContactContainer>
            <div className="bg-PolicyBG py-24">
                <PolicyContainer>
                    <Policy/>  
                </PolicyContainer>  
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact