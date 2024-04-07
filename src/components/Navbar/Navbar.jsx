import { Link, useNavigate } from 'react-router-dom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Login } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getUserProfile, logout } from '../../State/Auth/Action.js';
export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth);

  useEffect(() => {

    if (jwt) {
      dispatch(getUserProfile(jwt));
    }

  }, [jwt]);

  useEffect(() => {

    if (location.pathname === "/signin" || location.pathname === "/signup") {
      navigate(-1);
    }

  }, [auth.user])

  const [open, setOpen] = useState(false);

  function handleProfileClick() {
    setOpen(!open);

  }

  function handleLogout() {
    dispatch(logout());
    setOpen(false);
  }

  return (
    <>


      <nav class="flex justify-between  bg-gray-200 text-black w-screen relative">

        <div class=" flex w-full items-center px-8 py-1">
          <Link to="/">

            <div class="text-teal-600 flex pt-2 ">
              <img src="../../src/assets/swapify-removebg.png" alt="logo" className=' object-cover h-20 w-36' />

            </div>
          </Link>
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-900" href="#">Home</a></li>
            <li><Link to="/items" class="hover:text-gray-900" >Catagories</Link></li>
            <li><a class="hover:text-gray-900" href="#">Collections</a></li>
            <li><a class="hover:text-gray-900" href="#">Contact Us</a></li>
          </ul>



          <div class="hidden xl:flex items-center space-x-5 ">
            {(!auth.user) ? <><Link to="/signin" className="no-underline ms-7 me-4">
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





              <div className='bg-[#336B87] w-[40px] h-10 rounded-[100%] flex items-center justify-center'>
                <button className='  font-bold' onClick={handleProfileClick}><p className=" text-center text-[20px] text-black " >{auth.user?.firstName[0].toUpperCase()}</p></button>
              </div>

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
        {open &&
          <div className='bg-[#B1B3B3FF] flex flex-col shadow-md shadow-gray-900  w-[110px] h-auto absolute right-20 rounded-xl top-20 z-50'>

            <button className='hover:bg-[#E3CD81FF] font-semibold rounded-xl rounded-b-none  text-[1.25rem] h-[2.5rem] '>Account</button>
            <hr />
            <button className='hover:bg-[#E3CD81FF] rounded-b-xl rounded-t-none font-semibold text-[1.25rem] h-[2.5rem]' onClick={handleLogout}>Logout</button>
          </div>
        }
      </nav>




    </>
  )
}
