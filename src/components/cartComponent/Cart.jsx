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
<div
  key={productId}
  className="w-[300px] border cursor-pointer hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transition-all transform duration-300 ease-out border-blue-200 rounded-lg p-4"
  onClick={() => {
    navigate(`/product/${productId}`);
  }}
>
           <div className="relative">
                <img src={productImage} alt={productName} width={270} height={270} className="object-contain w-full h-[270px]" />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-800 font-medium text-base">{productName}</h3>
                <p className="uppercase text-green-600 text-xs font-medium">{differenceInDays} days</p>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-blue-600 text-xl font-semibold"><span className='i '>₹ </span>{productPrice}</span>
                  <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>


  {/* <div className=' w-[18rem] h-[20rem] p-2 relative border-[1px] border-solid border-slate-700 hover:scale-105 duration-200 cursor-pointer hover:shadow-lg hover:shadow-slate-800' onClick={()=>{navigate(`/product/${productId}`)}}>
    <img src={productImage} alt="Laptop" className=' object-cover h-[200px] w-[100%] ' />
    
    <div className=' absolute p-2 w-full left-1'>
      
      <p className=' text-[1.25rem] font-semibold align-middle m-0 '><span><CurrencyRupeeIcon /></span><span>{productPrice}</span></p>
      <p className='text-[1rem] p-1 align-middle font-normal   '>{productName}</p>

      <div className="flex justify-end text-[1rem] mt-1 ">
<span className='text-[12px] text-gray-600 p-1 '>{differenceInDays} days</span>
      </div>
    </div>
  </div> */}
  
       
    
  </>
  )
}


export default Cart;