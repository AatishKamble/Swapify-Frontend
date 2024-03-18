import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Cart = () => {
  const [selectedSize, setSelectedSize] = useState('M'); // Initial size
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const clothingSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Add or customize sizes as needed

  return (

    <div className='h-auto p-5 bg-[#fcf6f5ff] cart relative shadow-md w-full mb-5'>
      {/* Cross Icon */}
      <div className="absolute top-1 right-3 cursor-pointer text-[#0000005c] hover:text-[#000000a1]">
        <CloseRoundedIcon />
      </div>

      <div className='flex'>
        <img
          className='w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] object-cover object-top pr-5'
          src='https://encrypted-tbn.gstatic.com/shopping?q=tbn:ANd9GcRwNQ6jiZ45uCXbPNiAe8jKqh_yeHDYp_3Igil7-l4aq8zfxQ2tqsaHWPgqMXVJkFCPvBnfCj3Y8K3T1quL7CIfz6Bte_t5PXL3YCI4xGs&usqp=CAE'
          alt="Product"
        />
        <div className='flex flex-col justify-between'>
          <p className="font-semibold font-sans text-sm sm:text-lg ">Party Regular Sleeves Floral Print, Printed Women White...</p>
          <p className='text-xs mr-5'>color: blue</p>
          <div className='xs:flex flex-wrap hidden mt-2'>
            {/* <div className='xs:flex items-center hidden mr-5'>
            <label htmlFor='size' className='text-sm mr-2'>Size:</label>
            <select
              id='size'
              value={selectedSize}
              onChange={handleSizeChange}
              className='w-10 border border-gray-400 rounded'
            >
              {clothingSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div> */}
            <div className='flex items-center mr-5'> 
              <label htmlFor='size' className='text-sm mr-2'>QTY:</label>
              <select
                id='quantity'
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className='w-10 border p-1 text-xs border-gray-400 rounded'
              >
                {counts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <p className='mt-3 text-xs sm:text-sm font-[500] text-gray-900'>Rs.719 <span className='line-through text-gray-300'>Rs.1199</span> <span className='text-[#50d71e]'>(40% OFF)</span></p>
        </div>
      </div>
    </div>

  );
};

export default Cart;



