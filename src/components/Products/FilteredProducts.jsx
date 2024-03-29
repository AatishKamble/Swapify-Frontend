import React, { useState } from 'react'
import Cart from '../cartComponent/Cart';
import products from "../../dataset.js";

import Pagination from '@mui/material/Pagination';

const FilteredProducts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const ProductsPerPage = 10;
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;


  function handlePageChange(event, page) {

    setCurrentPage(page);
  }

  return (
    <>
      <div className='grid grid-cols-3 justify-between gap-10 h-full'>
        {products.slice(startIndex, endIndex).map((products, index) => (
          <div key={index} className='flex justify-center '>
            <Cart key={index} productName={products.productName} productImage={products.productImage} productPrice={products.productPrice} address={products.address} postedAgoDays={products.postedAgoDays} />

          </div>
        ))}

        <div className='col-span-3'>
          <div className='w-full h-20 flex justify-center items-center'>
            <Pagination
              count={Math.ceil(products.length / ProductsPerPage)}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default FilteredProducts