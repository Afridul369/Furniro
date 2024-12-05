import React from 'react'
import Image from './Image'
import Checkoutimg from '../assets/checkoutimg.png'
import Text from './Text'
import Container from './Container'
import Flex from './Flex'
import { FaChevronDown } from 'react-icons/fa'
import PolicyContainer from './PolicyContainer'
import Policy from './Policy'
import { RxCross2 } from 'react-icons/rx'
import Button2 from './Button2'

const Checkout = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={Checkoutimg} imgAlt={'Checkoutimg'} className={'w-full'}/>
        <div className="py-28">
          <Container>
              <Flex>
                  <div className="w-1/2">
                        <Text as={'h1'} text={'Billing details'} className={'text-4xl font-Pop font-semibold text-black mb-10'}/>
                        <div className="mb-10">
                            <Flex className={'gap-x-9'}>
                                <div className="">
                                    <Text as={'h1'} text={'First Name'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                                    <input type="text" placeholder='Enter your first name' className='border border-Footer py-6 px-4 rounded-lg ' />
                                </div>
                                <div className="">
                                    <Text as={'h1'} text={'Last Name'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                                    <input type="text" placeholder='Enter your Last name' className='border border-Footer py-6 px-4 rounded-lg ' />
                                </div>
                            </Flex>
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Company Name (Optional)'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='Enter your company name' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Country / Region'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <div className="relative">
                                <input type="text" placeholder='Enter your country name' onSelect={'Please Select'} className=' border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />  
                                <FaChevronDown className='absolute right-44 top-7 text-xl'/>
                            </div>   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Street address'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='Enter your street address' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Town / City'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" placeholder='Enter your street address' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Province'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <div className="relative">
                                <input type="text" placeholder='Western Province' onSelect={'Please Select'} className=' border border-Footer text-base text-Footer font-Pop py-6 px-4 rounded-lg  w-[75%] ' />  
                                <FaChevronDown className='absolute right-44 top-7 text-xl'/>
                            </div>  
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'ZIP code'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" minLength={3} maxLength={6} placeholder='Enter your ZIP code' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Phone'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="text" minLength={8} maxLength={12} placeholder='Enter your phone number' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="mb-10">
                            <Text as={'h1'} text={'Email address'} className={'text-base font-Pop font-medium text-black mb-5'}/>
                            <input type="email" placeholder='Enter your email address' className='border border-Footer py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                        <div className="">  
                            <input type="text" placeholder='Additional information' className='border border-Footer text-base text-Footer font-Pop py-6 px-4 rounded-lg  w-[75%] ' />   
                        </div>
                  </div>
                  <div className="w-1/2">
                      <div className="py-10 pl-16 w-[90%] ">
                            <div className=" border-b border-fooBorder mb-6">
                              <Flex className={'justify-between mb-6'}>
                                <Text as={'h1'} text={'Product'} className={'text-2xl font-Pop font-medium text-black '}/>
                                <Text as={'h1'} text={'Subtotal'} className={'text-2xl font-Pop font-medium text-black '}/>
                              </Flex>
                              <Flex className={'justify-between mb-6'}>
                                  <Flex className={'items-center gap-x-3 mb-6'}>
                                      <Text as={'h1'} text={'Asgaard sofa'} className={'text-base font-Pop  text-Footer '}/>
                                      <RxCross2 className='text-black'/>
                                      <Text as={'h1'} text={'1'} className={'text-sm font-Pop font-medium text-black '}/>
                                  </Flex>
                                <Text as={'h1'} text={'Rs. 250,000.00'} className={'text-base font-Pop font-light text-black mb-6'}/> 
                              </Flex>
                              <Flex className={'justify-between mb-6'}>
                                  <Text as={'h1'} text={'Subtotal'} className={'text-base font-Pop text-black mb-6'}/>
                                  <Text as={'h1'} text={'Rs. 250,000.00'} className={'text-base font-Pop font-light text-black mb-6'}/>
                              </Flex>
                              <Flex className={'justify-between mb-6'}>
                                  <Text as={'h1'} text={'Total'} className={'text-base font-Pop text-black '}/>
                                  <Text as={'h1'} text={'Rs. 250,000.00'} className={'text-2xl font-bold font-Pop text-PagiBG'}/>
                              </Flex>   
                            </div>
                            <Flex className={'items-center gap-x-3 mb-5'}>
                                <div className="rounded-full bg-black w-[15px] h-[15px]"></div>
                                <Text as={'h1'} text={'Direct Bank Transfer'} className={'text-base font-Pop text-black '}/>
                            </Flex>
                            <Text as={'p'} text={'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'} className={'text-base font-light font-Pop text-Footer mb-5'}/>
                            <Flex className={'items-center gap-x-4 mb-3'}>
                                <input type="checkbox" />
                                <Text as={'p'} text={'Direct Bank Transfer'} className={'text-base font-medium font-Pop text-Footer'}/>
                            </Flex>
                            <Flex className={'items-center gap-x-4 mb-5'}>
                                <input type="checkbox" />
                                <Text as={'p'} text={'Cash On Delivery'} className={'text-base font-medium font-Pop text-Footer'}/>
                            </Flex>
                            <Text as={'p'} text={'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.'} className={'text-base font-light font-Pop text-black '}/>
                            <div className=" flex justify-center pt-10">
                              <Button2 text='Place Order' className={' text-xl font-Pop text-black text-center'}/>
                            </div>
                      </div>
                  </div>
              </Flex>
          </Container>
        </div>
        <div className="bg-PolicyBG py-24">
          <PolicyContainer>
            <Policy/>  
          </PolicyContainer>  
        </div>
    </div>
    </>
  )
}

export default Checkout