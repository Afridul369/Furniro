import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'


const Product = () => {
  return (
    <div className="py-8">
        <Container>
           <div className="text-center">
            <Text as={'h1'} text={'Our Products'} className={'text-[40px] font-Pop font-bold text-Protext mb-10'}/>
           </div>
           <Flex>
            
           </Flex>
        </Container>

    </div>
  )
}

export default Product