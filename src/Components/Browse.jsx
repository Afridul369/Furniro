import React from 'react'
import Text from './Text'
import Container from './Container'
import Flex from './Flex'
import BrowseCard from './BrowseCard'
import Browseimg1 from '../assets/browseimg1.png'
import Browseimg2 from '../assets/browseimg2.png'
import Browseimg3 from '../assets/browseimg3.png'

const Browse = () => {
  return (
    <>
    <div className="py-8">
        <Container className="">
            <div className="text-center mb-16">
               <Text as={'h1'} text={'Browse The Range'} className={'text-[32px] font-Pop font-bold text-h1Text mb-2'}/>
               <Text as={'h1'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} className={'text-xl font-Pop text-PText '}/>
            </div>
            <Flex className={' flex-wrap justify-between'}>
                    <BrowseCard imgSrc={Browseimg1} imgAlt={'CARD1'} text={'Dining'}/>
                    <BrowseCard imgSrc={Browseimg2} imgAlt={'CARD1'} text={'Living'}/>
                    <BrowseCard imgSrc={Browseimg3} imgAlt={'CARD1'} text={'Bedroom'}/>
            </Flex>

            
        </Container>
    </div>
    </>
  )
}

export default Browse