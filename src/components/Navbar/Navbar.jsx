import { Link } from 'react-router-dom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Login } from '@mui/icons-material';
export const Navbar = () => {
  return (
 <>
    
      
        <nav class="flex justify-between  bg-gray-200 text-black w-screen">
          
          <div class=" flex w-full items-center px-8 py-1">
            <Link to="/">
           
        <div class="text-teal-600 flex pt-2 ">
        <img src="../../src/assets/swapify-removebg.png" alt="logo" className=' object-cover h-20 w-36' />
       
        </div>
    </Link>
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a class="hover:text-gray-900" href="#">Home</a></li>
              <li><a class="hover:text-gray-900" href="#">Catagory</a></li>
              <li><a class="hover:text-gray-900" href="#">Collections</a></li>
              <li><a class="hover:text-gray-900" href="#">Contact Us</a></li>
            </ul>
       
            <div class="hidden xl:flex items-center space-x-5 ">
            <Link to="/SignIn"  className="no-underline mx-7">
            <div className=" text-center text-[12px] " >
              <LoginIcon/>
              <p className="p-0 m-0 font-bold">SignIn</p>
            </div>
          </Link>
            <Link to="/profile"  className="no-underline mx-7">
            <div className=" text-center text-[12px] " >
              <PersonOutlinedIcon />
              <p className="p-0 m-0 font-bold">Profile</p>
            </div>
          </Link>

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
