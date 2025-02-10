import { removeItemFromCart } from "../../State/Cart/Action"

import {  useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
const CartItems = ({cart}) => {

    const dispatch = useDispatch();
    
    function handleClickToDelete(Id) {

        dispatch(removeItemFromCart(Id))

    }
  return (
    <>
    

                            {cart.cart?.cartItems?.map((item, index) => {
                                return (
                                    <div className="relative bg-[#e3e8ec] border-[2px] border-red-50  h-[200px]  flex items-center px-10 cursor-pointer  mb-5" key={item?._id}  >
                                        <div className=" flex" >
                                            <div className="w-[150px] h-[170px]  bg-[#e4e8ea]" >
                                                <img src={item.product?.imageURL} alt="product image" className="  object-fill w-full h-full" />
                                            </div>

                                            <div className=" bg-inherit mx-16 h-full p-5 py-5">
                                                <p className="font-normal text-[1.5rem] font-serif mb-5 ">{item.product?.title}</p>
                                                <p className="font-normal text-[1rem] font-serif  ">i phone 15 promax 4 gb new model</p>
                                                <p className="font-bold text-[1.25rem] font-serif my-5 "> <span>$</span>{item.product?.price}</p>

                                            </div></div>


                                        <div className="w-10 h-10  bg-inherit absolute top-2 right-3 flex item-center justify-center" >
                                            <button className="text-[#bfcedc]" onClick={() => handleClickToDelete(item._id)}><CancelIcon fontSize="large" /></button>

                                        </div>


                                    </div>

                                )
                            })}



                        
    
    
    </>
  )
}

export default CartItems