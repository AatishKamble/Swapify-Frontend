import React, { useState } from 'react'
import Cart from '../cartComponent/Cart';
import products from "../../dataset.js";
import {useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const FilteredProducts = () => {

  const {product}=useSelector(store=>store);
  console.log(product)

  const ProductsPerPage = 10;
  const startIndex = product.products && product.products.content?.currentPage
  * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;

const location=useLocation();
 const navigate=useNavigate();
  function handlePageChange(event, page) {
  const searchParams=new URLSearchParams(location.search);
    searchParams.set("page",page);
    const query=searchParams.toString();
    navigate({search:`?${query}`})

  }

  return (
    <>
      <div className='grid grid-cols-3 justify-between gap-10 h-full'>
        {product.products && product.products.content?.map((item, index) => (
          <div key={index} className='flex justify-center '>
            
            <Cart key={index} productName={item.title} productImage={item.imageURL} productPrice={item.price} dateCreated={item.createdAt} />

          </div>
        ))}

        <div className='col-span-3'>
          <div className='w-full h-20 flex justify-center items-center'>
            <Pagination
              count={product.products?.totalPages}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default FilteredProducts