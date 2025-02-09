import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import {useNavigate} from "react-router-dom"
const Cart = ({ productName,productImage,productPrice,dateCreated,productId}) => {
  dateCreated=new Date(dateCreated);
  const today = new Date();
  const differenceInMilliseconds = today - dateCreated;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
const navigate=useNavigate();

  return (
  <>
  <div className=' w-[18rem] h-[20rem] p-2 relative border-[1px] border-solid border-slate-700 hover:scale-105 duration-200 cursor-pointer hover:shadow-lg hover:shadow-slate-800' onClick={()=>{navigate(`/product/${productId}`)}}>
    <img src={productImage} alt="Laptop" className=' object-cover h-[200px] w-[100%] ' />
    
    <div className=' absolute p-2 w-full left-1'>
      
      <p className=' text-[1.25rem] font-semibold align-middle m-0 '><span><CurrencyRupeeIcon /></span><span>{productPrice}</span></p>
      <p className='text-[1rem] p-1 align-middle font-normal   '>{productName}</p>

      <div className="flex justify-end text-[1rem] mt-1 ">
<span className='text-[12px] text-gray-600 p-1 '>{differenceInDays} days</span>
      </div>
    </div>
  </div>
  
       
    
  </>
  )
}


export default Cart;