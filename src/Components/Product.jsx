import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Products from './Products'
import Product1 from '../assets/product1.png'


const Product = () => {
  return (
    <div className="py-8">
        <Container>
           <div className="text-center">
            <Text as={'h1'} text={'Our Products'} className={'text-[40px] font-Pop font-bold text-Protext mb-10'}/>
           </div>
           <Flex className={'flex-wrap gap-x-8'}>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
            <Products imgSrc={Product1} text1={'-30%'} text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>}/>
           </Flex>
        </Container>

    </div>
  )
}

export default Product