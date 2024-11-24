import React from 'react'
import Badge from './Badge'

const DynamicBadge = ({text1,backgroundBG}) => {
  return (
   <>
   <div className="">
        <Badge text={text1} className={'absolute top-5 left-[215px]'} bg={backgroundBG}/>    
   </div>
   </>
  )
}

export default DynamicBadge