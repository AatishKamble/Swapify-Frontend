import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Login } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUserProfile } from '../../State/Auth/Action.js';

export const Navbar = () => {
  
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth);

  useEffect(() => {

    if (jwt) {
      
      dispatch(getUserProfile(jwt));
    }
  }, [jwt]

  );

  return (
    <>


      <nav class="flex justify-between  bg-gray-100 text-black w-screen">

        <div class=" flex w-full items-center px-8 py-1">
          <Link to="/">

            <div class="text-teal-600 flex pt-2 ">
              <img src="../../src/assets/swapify-removebg.png" alt="logo" className=' object-cover h-20 w-36' />

            </div>
          </Link>
          
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-blue-900" href="#">Home</a></li>
            <li><a class="hover:text-blue-900" href="#">Catagory</a></li>
            <li><a class="hover:text-blue-900" href="#">Collections</a></li>
            <li><a class="hover:text-blue-900" href="#">Contact Us</a></li>
          </ul>



          <div class="hidden xl:flex items-center space-x-5 ">
            {true ? 
            <><Link to="/signin" className="no-underline ms-7 me-4">
              <div className=" text-center text-[12px] " >
                <LoginIcon />
                <p className="p-0 m-0 font-bold">Sign In</p>
              </div>
            </Link>
            
            <Link to="#" className="no-underline ms-7 me-4">
              <div className=" text-center text-[12px] " >
                <SellIcon />
                <p className="p-0 m-0 font-bold">Sell</p>
              </div>
            </Link>
            
            </> :
            
            


              <Link to="/profile" className="no-underline mx-4">
                <div className='bg-[#336B87] w-[40px] h-10 rounded-[100%] flex items-center justify-center'>
                  <div className='  font-bold'><p className=" text-center text-[20px] text-black ">A</p></div>
                </div>
              </Link>
            }
            <Link className="no-underline mx-7">
              <div className="text-center text-[12px] ">
                <FavoriteBorderIcon />
                <p className="p-0 m-0 font-bold">Wishlist</p>
              </div>
            </Link>

            <Link to="/cart" className="no-underline mx-7">
              <div className="text-center text-[12px]">
                <ShoppingCartOutlinedIcon />
                <p className="p-0 m-0 font-bold">Cart</p>
              </div>
            </Link>
          </div>
        </div>



      </nav>

    </>
  )
}
