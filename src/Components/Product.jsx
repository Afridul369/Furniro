import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Products from './Products'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'
import Product5 from '../assets/product5.png'
import Product6 from '../assets/product6.png'
import Product7 from '../assets/product7.png'
import Product8 from '../assets/product8.png'
import Badge from './Badge'
import DynamicBadge from './DynamicBadge'
import Button1 from './Button1'
import axios from 'axios'


const Product = () => {
  // const [all,setAll] =useState([])
  // useEffect(()=>{
  //   async function all(){
  //     let data = await axios.get('https://api.escuelajs.co/api/v1/products')
  //     setAll(data.data.products)
  //   }
  //   all()
  // },[])
  return (
    <div className="py-16">
        <Container>
           <div className="text-center">
            <Text as={'h1'} text={'Our Products'} className={'text-[40px] font-Pop font-bold text-Protext mb-10'}/>
           </div>
           <Flex className={'flex-wrap gap-x-8'}>
            {/* {
              all.map((item)=>(
                <Products imgSrc={item.images}  text2={item.title} text3={item.category} text4={item.price}  />
              ))
            } */}

              <Link to={'/singleproducts'}><Products imgSrc={Product1}  text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>} icon={<DynamicBadge text6={'-30%'} backgroundBG={'bg-Badgebg'}/>}/></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product2}  text2={'Leviosa'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'}  /></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product3}  text2={'Lolito'} text3={'Luxury big sofa'} text4={'Rp 7.000.000'} text5={<del>Rp 14.000.000</del>} icon={<DynamicBadge text6={'-50%'} backgroundBG={'bg-Badgebg'}/>}/></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product4}  text2={'Respira'} text3={'Outdoor bar table and stool'} text4={'Rp 500.000'} icon={<DynamicBadge text6={'New'} backgroundBG={'bg-Badgebg2'}/>}/></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product5}  text2={'Grifo'} text3={'Night lamp'} text4={'Rp 1.500.000'} /></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product6}  text2={'Muggo'} text3={'Small mug'} text4={'Rp 150.000'} icon={<DynamicBadge text6={'New'} backgroundBG={'bg-Badgebg2'}/>}/></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product7}  text2={'Pingky'} text3={'Cute bed set'} text4={'Rp 7.000.000'} text5={<del>Rp 14.000.000</del>} icon={<DynamicBadge text6={'-50%'} backgroundBG={'bg-Badgebg'}/>}/></Link>
              <Link to={'/singleproducts'}><Products imgSrc={Product8}  text2={'Potty'} text3={'Minimalist flower pot'} text4={'Rp 500.000'} icon={<DynamicBadge text6={'New'} backgroundBG={'bg-Badgebg2'}/>}/></Link>
           </Flex>               
             <Link to={'/shop'}><Button1 texts={'Show More'} className={'mx-auto'}/></Link>     
        </Container>

    </div> 
  )
}

export default Product