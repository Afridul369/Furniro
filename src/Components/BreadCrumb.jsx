import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import { FaChevronRight } from 'react-icons/fa'
import { PiLineVertical } from 'react-icons/pi'

const BreadCrumb = () => {
  return (
    <>
    <div className="py-6 bg-Filterbg">
            <Container>
                <Flex className={'gap-x-6 items-center'}>
                    <Flex className={'items-center gap-x-3'}>
                        <Text as={'p'} text={'Home'} className={'text-base font-Pop text-Footer'}/>
                        <FaChevronRight />
                    </Flex>
                    <Flex className={'items-center gap-x-3'}>
                        <Text as={'p'} text={'Shop'} className={'text-base font-Pop text-Footer'}/>
                        <FaChevronRight />
                    </Flex>
                    <PiLineVertical className='text-3xl text-Footer'/>
                    <Text as={'p'} text={'Asgaard sofa'} className={'text-base font-Pop text-black'}/>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default BreadCrumb