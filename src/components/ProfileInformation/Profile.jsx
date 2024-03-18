
import Profilecard from '../ProfileCard/Profilecard.jsx';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet,Link } from 'react-router-dom';

import { useState } from 'react';
import Title from '../FormTitle/Title.jsx';

export default function Profile() {

  const [isProfileEdit, setIsProfileEdit] = useState(false);
  function handleOnClick() {
    setIsProfileEdit(true);


  }

  return (

    <>
    
        <div className="md:grid md:auto-cols-auto md:auto-rows-auto md:justify-center md:align-middle md:gap-x-[20px] mt-[100px] md:mx-[30px]  mx-[20px] bg-[#f7f7db63] md:w-auto ">
          <Title title="Account" subtitle="Overview"/>



          <div className='mt-[50px] flex flex-col md:gap-10 gap-6 mb-[70px] md:grid md:grid-cols-2 md:justify-center'>
          <Link to="/Orders" className='no-underline text-inherit'> <Profilecard title="Your Orders" subtitle="Track Your Order Status" icon={<ListAltIcon  />} /></Link>
            <Profilecard title="Your Wishlist" subtitle="Check your collections product details" icon={<FavoriteIcon  />} />
            <Link to="/address-edit" className='no-underline text-inherit'>  <Profilecard title="Address" subtitle="Save address for checkout" icon={<AddLocationAltIcon />} /></Link>
          <Link to="/profile-Edit" className='no-underline text-inherit'> <Profilecard title="Profile Edit" subtitle="Change your profile details" icon={<EditIcon  />}   /></Link>
          </div>

          <div className="mb-8 flex justify-center items-center">

        <button className="w-[9rem] h-[2.5rem] bg-[#ed0547d0] rounded-xl border-2 border-solid border-[#ef0d58] outline-none text-[20px] font-['Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif] cursor-pointer "><LogoutIcon /> Logout</button>
    </div>
 
        </div>

       
      
    </>
  );
}
