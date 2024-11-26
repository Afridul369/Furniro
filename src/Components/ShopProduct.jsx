import React from 'react'
import Flex from './Flex'
import Container from './Container'
import Products from './Products'
import DynamicBadge from './DynamicBadge'

const ShopProduct = ({image,  title, description, offprice, price,discountbg,discount}) => {
  return (
    <>
    <div className="mb-10">
        <Container>
            <Flex>
                <Products imgSrc={image}  text2={title} text3={description} text4={offprice} text5={<del>{price}</del>} icon={<DynamicBadge text6={discount} backgroundBG={discountbg}/>}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ShopProduct