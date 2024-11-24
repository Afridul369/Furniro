import React from 'react'
import Text from './Text'
import Button1 from './Button1'

const Explore = () => {
  return (
    <div className="py-8 bg-ExploreBG">
        <div className="pl-[330px]">
            <div className="py-44">
                <div className="w-1/3">
                    <Text as={'h1'} text={'50+ Beautiful rooms inspiration'} className={'text-[40px] font-Pop font-bold text-Protext mb-1'}/>
                    <Text as={'h1'} text={'Our designer already made a lot of beautiful prototipe of rooms that inspire you'} className={'text-base font-Pop font-medium text-ExploreText pr-24 mb-6'}/>
                    <Button1 texts={'Explore More'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore