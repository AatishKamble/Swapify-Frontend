import React, { useEffect, useState } from 'react'
import Cart from '../cartComponent/Cart';
import products from "../../dataset.js";
import {useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const FilteredProducts = () => {
  
  const location=useLocation();
 
   const navigate=useNavigate();
  const searchParams=new URLSearchParams(location.search);

  const {product}=useSelector(store=>store);
  

  function handlePageChange(event, page) {
    
    searchParams.set("page",page);
    const query=searchParams.toString();
    navigate({search:`?${query}`})
    window.scrollTo(0, 0);

  }

 

  return (
    <>
      <div className='grid grid-cols-3 justify-between gap-10 h-full'>
        {product.products && product.products.content?.map((item, index) => (
          <div key={index} className='flex justify-center '>
            
            <Cart key={index} productName={item.title} productImage={item.imageURL} productPrice={item.price} dateCreated={item.createdAt} productId={item._id} />

          </div>
        ))}

        <div className='col-span-3 flex items-end justify-center'>
          <div className=' w-full h-20 flex justify-center items-center'>
            <Pagination
              count={product.products?.totalPages}
              variant="outlined"
              shape="rounded"
              page={product.products?.currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default FilteredProducts