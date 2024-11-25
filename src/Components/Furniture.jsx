import React from 'react'
import Text from './Text'
import Flex from './Flex'
import Image from './Image'
import Furniture1 from '../assets/furniture1.png'
import Furniture2 from '../assets/furniture2.png'
import Furniture3 from '../assets/furniture3.png'
import Furniture4 from '../assets/furniture4.png'
import Furniture5 from '../assets/furniture5.png'
import Furniture6 from '../assets/furniture6.png'
import Furniture7 from '../assets/furniture7.png'
import Furniture8 from '../assets/furniture8.png'
import Furniture9 from '../assets/furniture9.png'

const Furniture = () => {
  return (
    <>
    <div className="py-16 border-b-2 border-border">
        <div className="text-center">
            <Text as={'p'} text={'Share your setup with'} className={'text-xl font-Pop font-semibold text-ExploreText mb-3'}/>
            <Text as={'h1'} text={'#FuniroFurniture'} className={'text-[40px] font-Pop font-bold text-Protext'}/>
        </div>
        <div className="w-full">
            <Flex className="justify-between ">
                <div className=" ">
                    <Flex className={'gap-x-20 mb-10'}>
                        <Image imgSrc={Furniture1} imgAlt={'Furniture1'} />
                        <div className="">
                            <Image imgSrc={Furniture2} imgAlt={'Furniture2'} className={'w-[110%]'}/>
                        </div>
                    </Flex>
                    <Flex className={'gap-x-10'}>
                        <Image imgSrc={Furniture3} imgAlt={'Furniture3'} />
                        <Image imgSrc={Furniture4} imgAlt={'Furniture4'} />
                    </Flex>
                </div>
                <div className="my-auto">
                    <Image imgSrc={Furniture5} imgAlt={'Furniture5'} />
                </div>
                <div className="">
                    <Flex className={'gap-x-10 mb-10'}>
                        <Image imgSrc={Furniture6} imgAlt={'Furniture6'} />
                        <Image imgSrc={Furniture7} imgAlt={'Furniture7'} />
                    </Flex>
                    <Flex className={'gap-x-10'}>
                        <Image imgSrc={Furniture8} imgAlt={'Furniture8'} />
                        <Image imgSrc={Furniture9} imgAlt={'Furniture9'} />
                    </Flex>
                </div>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Furniture