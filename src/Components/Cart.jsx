import React from 'react'
import Image from './Image'
import CartImg from '../assets/cartimg.png'
import Flex from './Flex'
import Text from './Text'
import Container from './Container'
import Cartproimg from '../assets/cartproimg.png'
import { AiFillDelete } from 'react-icons/ai'
import Button2 from './Button2'
import { Link } from 'react-router-dom'
import PolicyContainer from './PolicyContainer'
import Policy from './Policy'

const Cart = () => {
  return (
    <>
    <div className="">
        <Image imgSrc={CartImg} imgAlt={'cartimg'} className={'w-full'}/>
        <div className="py-16">
            <Container>
                <Flex className={'gap-x-6'}>
                    <div className="">
                        <div className="px-40 py-4 bg-Filterbg mb-12">
                            <Flex className={'gap-x-32'}> 
                                <Flex className={'gap-x-28'}>
                                    <Text as={'p'} text={'Product'} className={'text-base font-Pop font-medium text-black'}/>
                                    <Text as={'p'} text={'Price'} className={'text-base font-Pop font-medium text-black'}/>
                                </Flex>
                                <Flex className={'gap-x-10'}>
                                    <Text as={'p'} text={'Quantity'} className={'text-base font-Pop font-medium text-black'}/>
                                    <Text as={'p'} text={'Subtotal'} className={'text-base font-Pop font-medium text-black'}/>
                                </Flex>
                            </Flex>
                        </div>
                        <div className="">
                            <Flex className={'items-center'}>
                                <Image imgSrc={Cartproimg} imgAlt={'Cartproimg'}/>
                                <div className="px-14">
                                    <Flex className={'gap-x-20'}>
                                        <Flex className={'items-center gap-x-16'}>
                                            <Text as='p' text='Asgaard sofa' className={'text-base font-Pop text-Footer'}/>
                                            <Text as='p' text='Rs. 250,000.00' className={'text-base font-Pop text-Footer'}/>
                                        </Flex>
                                        <Flex className={'items-center gap-x-12'}>
                                            <Text as='p' text='1' className={'py-2 px-4 rounded-lg border border-Footer text-base font-Pop text-black'}/>
                                            <Text as='p' text='Rs. 250,000.00' className={'text-base font-Pop text-black'}/>
                                            <AiFillDelete className='text-PagiBG text-3xl'/>
                                        </Flex>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                    </div>
                    <div className="px-16 pb-16 pt-6 bg-Filterbg">
                        <Text as={'p'} text={'Cart Totals'} className='text-[32px] text-center font-semibold font-Pop text-black mb-16'/>
                        <Flex className={' gap-x-12 mb-9'}>
                            <Text as={'p'} text={'Subtotal'} className='text-base font-medium font-Pop text-black '/>   
                            <Text as={'p'} text={'Rs. 250,000.00'} className='text-base  font-Pop text-Footer '/>   
                        </Flex>  
                        <Flex className={' gap-x-10 mb-10'}>
                            <Text as={'p'} text={'Total'} className='text-base font-medium font-Pop text-black '/>   
                            <Text as={'p'} text={'Rs. 250,000.00'} className='text-xl font-medium font-Pop text-PagiBG '/>   
                        </Flex>  
                        <Link to={'/checkout'}>
                            <Button2 text='Check Out' className={'text-xl font-pop text-black text-center'}/> 
                        </Link>
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

export default Cart