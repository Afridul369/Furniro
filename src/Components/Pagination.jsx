import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Products from './Products';
import Product1 from '../assets/product1.png';
import Data from './Data'
import ShopProduct from './ShopProduct';
import Flex from './Flex';
import { Link } from 'react-router-dom';




function Items({ currentItems }) {
  return (
    <>
      <div className="flex flex-wrap gap-x-8">
        {currentItems &&
            currentItems.map((item) => (
            <div>
                <Link to={'/singleproducts'}>
                  <ShopProduct image={item.image}  title={item.title} description={item.description} offprice={item.offprice} price={item.price} discount={item.discount} discountbg={item.discountbg}/>
                </Link>
            </div>
            ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className={'items-center justify-center'}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        nextClassName=' py-5 px-6 rounded-lg hover:text-white hover:bg-PagiBG bg-Filterbg text-black text-xl font-Pop font-light duration-500'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName='flex gap-x-8 items-center'
        pageLinkClassName='hover:bg-PagiBG hover:text-white bg-Filterbg text-black text-xl font-Pop duration-500 py-5 px-6 rounded-lg '
      />
      </Flex>
      
    </>
  );
}
export default Pagination