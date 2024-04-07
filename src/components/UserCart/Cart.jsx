import { useEffect } from "react";
import product from "../../dataset.js";
import {useNavigate} from "react-router-dom"
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector, useDispatch } from 'react-redux';
import { getUserCart, removeItemFromCart } from "../../State/Cart/Action.js";
const Cart = () => {

    const cart = useSelector(store => store.cart);

    const dispatch = useDispatch();
const navigate=useNavigate();
    useEffect(() => {

        dispatch(getUserCart());

    }, [cart.deleteCartItem]);




    function handleClickToDelete(Id) {

        dispatch(removeItemFromCart(Id))

    }

    return (
        <>
 {cart.cart?.totalItems?
          
            <div className='bg-[#F1F1F2] w-full flex pb-20  h-auto justify-evenly py-8 overflow-y-scroll my-2  '>

           
                <div className="w-[60%] pb-10">
                    <div className=" ms-10 h-[800px]   ">

                        {cart.cart?.cartItems?.map((item, index) => {
                            return (
                                <div className="relative bg-[#B0B8B4FF] shadow-sm shadow-slate-900 h-[200px]  flex items-center px-10  mb-5" key={item?._id} >

                                    <div className="w-[150px] h-[170px] bg-blue-300 ">
                                        <img src={item.product?.imageURL} alt="product image" className="  object-fill w-full h-full" />
                                    </div>

                                    <div className=" bg-inherit mx-16 h-full p-5 py-5">
                                        <p className="font-normal text-[1.5rem] font-serif mb-5 ">{item.product?.title}</p>
                                        <p className="font-bold text-[1.25rem] font-serif my-5 "> <span>$</span>{item.product?.price}</p>

                                    </div>

                                    <div className="w-10 h-10  bg-inherit absolute top-2 right-3 flex item-center justify-center" >
                                        <button className="text-[#002C54]" onClick={() => handleClickToDelete(item._id)}><CancelIcon fontSize="large" /></button>

                                    </div>


                                </div>

                            )
                        })}



                    </div>


                </div>


            
                    <div className="bg-[#B3C7D6FF] h-[400px] w-[400px] sticky top-0 p-5 border-2 border-[#FCF6F5FF]">

                        <div className="text-[1.5rem] font-serif font-normal border-b-2 border-slate-800  ">

                            <p >
                                Price Details
                            </p>
                        </div>

                        <div className="text-[1.25rem] font-serif py-4 mt-2 ">
                            <div className=" flex justify-between">
                                <p>
                                    Price <span>({cart.cart?.totalItems} items)</span>
                                </p>

                                <p>
                                    {cart.cart?.totalPrice}
                                </p>

                            </div>

                            <div className=" flex justify-between my-6">
                                <p>
                                    Delivery Charges
                                </p>

                                <p>
                                    Free
                                </p>

                            </div>

                            <div className=" flex justify-between my-6 border-t-2 border-dashed border-slate-800 mt-10 pt-5">
                                <p>
                                    Total Price
                                </p>

                                <p>
                                    {cart.cart?.totalPrice}
                                </p>

                            </div>

                        </div>

                        <div className="w-full p-2 ">
                            <button className="bg-[#1995AD] px-5 font-serif text-[1rem] w-full h-[2.5rem] font-semibold rounded-xl "> <span>Proceed To Buy</span></button>

                        </div>

                    </div>
                    
    
            </div>


                


                    :
                    <div className="w-full h-[500px] bg-[#E3CCB2] flex flex-col justify-center items-center">
    
                           <div>
    
                        <p className="text-[3rem] font-serif text-slate-600">Sorry Your Cart is Empty</p>
                           
                           
                           </div>

                           <div className="w-[200px] h-[200px] relative cursor-pointer mt-10" onClick={()=>navigate("/items")}>
                                  <img src="../../src/assets/cartEmpty.png" alt="cart empty" className=" object-cover"/>
                           </div>
                    </div>
                    }
        </>
    )
}

export default Cart