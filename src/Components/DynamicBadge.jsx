import React from 'react'
import Badge from './Badge'

const DynamicBadge = ({text6,backgroundBG}) => {
  return (
   <>
   <div className="">
        <Badge text={text6} className={'absolute top-5 left-[215px]'} bg={backgroundBG}/>    
   </div>
   </>
  )
}

export default DynamicBadge