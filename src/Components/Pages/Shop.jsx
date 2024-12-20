import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Shopimg from '../../assets/shopimg.png'
import FilterBox from '../FilterBox'
import Pagination from '../Pagination'

import Policy from '../Policy'
import PolicyContainer from '../PolicyContainer'


const Shop = () => {
  return (
    <>
    <div className="">
      <Image imgSrc={Shopimg} imgAlt={'shopimg'} className={'w-full '}/>
      <div className="bg-Filterbg">
          <Container>
              <FilterBox/>
          </Container>
      </div>
      <Container className={'py-20'}>
        <Pagination itemsPerPage={16} />
      </Container>
      <div className="bg-PolicyBG py-24">
          <PolicyContainer>
            <Policy/>  
          </PolicyContainer>  
      </div>
    </div>
    </>
  )
}

export default Shop