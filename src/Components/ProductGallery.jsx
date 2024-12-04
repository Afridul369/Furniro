import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Gallery3 from '../assets/gallery3.png'
import Gallery4 from '../assets/gallery4.png'
import Gallery5 from '../assets/gallery5.png'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'
import Singleproimg1 from '../assets/singleproimg1.png'
import Singleproimg2 from '../assets/singleproimg2.png'
import Text from './Text'
import Star from './Star'
import { PiLineVertical } from 'react-icons/pi'
import { FiMinus } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Products from './Products'
import DynamicBadge from './DynamicBadge'
import Button1 from './Button1'

const ProductGallery = () => {
  return (
    <>
    <div className="py-8 ">
        <Container >
            <Flex className={'justify-between  border-b-2 border-fooBorder'}>
                <div className="w-1/2 ">
                    <Flex>
                        <div className="">
                            <Image imgSrc={Gallery1} imgAlt={'Gallery1'} className={'mb-7'}/>
                            <Image imgSrc={Gallery2} imgAlt={'Gallery2'} className={'mb-7'}/>
                            <Image imgSrc={Gallery3} imgAlt={'Gallery3'} className={'mb-7'}/>
                            <Image imgSrc={Gallery4} imgAlt={'Gallery4'} className={'mb-7'}/>
                        </div>
                        <Image imgSrc={Gallery5} imgAlt={'Gallery5'}/>
                    </Flex>
                </div>
                <div className="w-1/2 ">
                    <Text as={'h1'} text={'Asgaard Sofa'} className={'text-[42px] font-Pop  text-black mb-2'}/>
                    <Text as={'h1'} text={'Rs. 250,000.00'} className={'text-2xl font-Pop font-medium text-Footer mb-4'}/>
                    <Flex className={'gap-x-5 items-center mb-4'}>
                        <Star/>
                        <PiLineVertical className='text-3xl text-Footer'/>
                        <Text as={'p'} text={'5 Customer Review'} className={'text-[13px] font-Pop  text-Footer'}/>
                    </Flex>
                    <Text as='p' text={'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.'} className={'text-[13px] font-Pop text-black mb-4'}/>
                    <Text as='p' text='Size' className={'text-sm font-Pop text-Footer mb-4'}/>
                    <Flex className={'gap-x-4 mb-4'}>
                        <Text as={'p'} text={'L'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-4 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                        <Text as={'p'} text={'XL'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-3 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                        <Text as={'p'} text={'XS'} className={'text-[13px] font-Pop text-black bg-Filterbg py-2.5 px-3 rounded-lg hover:bg-PagiBG hover:text-white duration-500'}/>
                    </Flex>
                    <Text as='p' text='Color' className={'text-sm font-Pop text-Footer mb-3'}/>
                    <Flex className={'gap-x-4 mb-5'}>
                        <div className="w-[30px] h-[30px] bg-colorbg rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-PagiBG rounded-full"></div>
                    </Flex>
                    <div className="border-b-2 border-fooBorder mb-10">
                        <Flex className={'gap-x-5 mb-14'}>
                            <div className="py-5 px-2 border border-black hover:border-Footer duration-200 rounded-xl">
                                <Flex className={'items-center gap-x-8'}>
                                    <FiMinus />
                                    <Text as={'p'} text={'1'} className={'text-base font-Pop font-medium text-black'}/>
                                    <FaPlus />
                                </Flex>
                            </div>
                            <Link to={'/cart'}>
                            <div className="py-5 px-12 border border-black hover:border-Footer duration-200 rounded-2xl">
                                <Text as={'p'} text={'Add To Cart'} className={'text-xl font-Pop  text-black'}/>
                            </div>
                            </Link>
                            <Link to={'/comparison'}>
                            <div className="py-5 px-12 border border-black hover:border-Footer duration-200 rounded-2xl">
                                <Flex className={'items-center gap-x-3'}>
                                    <FaPlus />
                                    <Text as={'p'} text={'Compare'} className={'text-xl font-Pop  text-black'}/>
                                </Flex>
                            </div>
                            </Link>
                        </Flex>
                    </div>
                    <div className="mb-16">
                        <Flex className={'gap-x-14 mb-3'}>
                            <Text as={'p'} text={'SKU'} className={'text-base font-Pop text-Footer'}/>
                            <Flex className={'gap-x-3'}>
                                <Text as={'p'} text={':'} className={'text-base font-Pop text-Footer'}/>
                                <Text as={'p'} text={'SSOO1'} className={'text-base font-Pop text-Footer'}/>
                            </Flex>
                        </Flex>
                        <Flex className={'gap-x-3 mb-3'}>
                            <Text as={'p'} text={'Category'} className={'text-base font-Pop text-Footer'}/>
                            <Flex className={'gap-x-3'}>
                                <Text as={'p'} text={':'} className={'text-base font-Pop text-Footer'}/>
                                <Text as={'p'} text={'Sofas'} className={'text-base font-Pop text-Footer'}/>
                            </Flex>
                        </Flex>
                        <Flex className={'gap-x-12 mb-3'}>
                            <Text as={'p'} text={'Tags'} className={'text-base font-Pop text-Footer'}/>
                            <Flex className={'gap-x-3'}>
                                <Text as={'p'} text={':'} className={'text-base font-Pop text-Footer'}/>
                                <Text as={'p'} text={'Sofa, Chair, Home, Shop'} className={'text-base font-Pop text-Footer'}/>
                            </Flex>
                        </Flex>
                        <Flex className={'gap-x-10 mb-3'}>
                            <Text as={'p'} text={'Share'} className={'text-base font-Pop text-Footer'}/>
                            <Flex className={'gap-x-3 items-center'}>
                                <Text as={'p'} text={':'} className={'text-base font-Pop text-Footer'}/>
                                <Flex className={'gap-x-6'}>
                                    <FaFacebook className='text-2xl'/>
                                    <FaLinkedin className='text-2xl'/>
                                    <AiFillTwitterCircle className='text-2xl'/>
                                </Flex>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </Flex>
            <div className="py-16 border-b-2 border-fooBorder">
                <div className="flex justify-center mb-12">
                    <Flex className={'gap-x-16'}>
                        <Text as={'h1'} text={'Description'} className={'text-2xl font-Pop font-medium text-Footer hover:text-black duration-500'}/>
                        <Text as={'h1'} text={'Additional Information'} className={'text-2xl font-Pop  text-Footer hover:text-black duration-500'}/>
                        <Text as={'h1'} text={'Reviews [5]'} className={'text-2xl font-Pop  text-Footer hover:text-black duration-500'}/>
                    </Flex>
                </div>
                <div className=" px-[100px] mb-9">
                    <Text as={'p'} text={'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.'} className={'text-base font-Pop text-Footer mb-8'}/>
                    <Text as={'p'} text={'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'} className={'text-base font-Pop text-Footer'}/>
                </div>
                <Flex className={'justify-between'}>
                    <Image imgSrc={Singleproimg1} imgAlt={'Singleproimg1'}/>
                    <Image imgSrc={Singleproimg2} imgAlt={'Singleproimg2'}/>
                </Flex>
            </div>
            <div className="py-16 border-b-2 border-fooBorder ">
                <div className="text-center">
                    <Text as={'h1'} text={'Related Products'} className={'text-4xl font-Pop font-medium text-black mb-9'}/>
                </div>
                <Flex className={'gap-x-8 mb-2'}>
                    <Link to={'/singleproducts'}><Products imgSrc={Product1}  text2={'Syltherine'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'} text5={<del>Rp 3.500.000</del>} icon={<DynamicBadge text6={'-30%'} backgroundBG={'bg-Badgebg'}/>}/></Link>
                    <Link to={'/singleproducts'}><Products imgSrc={Product2}  text2={'Leviosa'} text3={'Stylish cafe chair'} text4={'Rp 2.500.000'}  /></Link>
                    <Link to={'/singleproducts'}><Products imgSrc={Product3}  text2={'Lolito'} text3={'Luxury big sofa'} text4={'Rp 7.000.000'} text5={<del>Rp 14.000.000</del>} icon={<DynamicBadge text6={'-50%'} backgroundBG={'bg-Badgebg'}/>}/></Link>
                    <Link to={'/singleproducts'}><Products imgSrc={Product4}  text2={'Respira'} text3={'Outdoor bar table and stool'} text4={'Rp 500.000'} icon={<DynamicBadge text6={'New'} backgroundBG={'bg-Badgebg2'}/>}/></Link>
                </Flex>
                <Link to={'/shop'}><Button1 texts={'Show More'} className={'mx-auto mb-8'}/></Link>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ProductGallery