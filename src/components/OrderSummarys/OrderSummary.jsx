
import CartItems from "../UserCart/CartItems";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserCart } from "../../State/Cart/Action.js";

const OrderSummary = ({ setCurrentStep }) => {
  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getUserCart());

}, [cart.deleteCartItem]);

useEffect(()=>{
  window.scrollTo(1,1);
})

  return (
    <>
      <div className='w-full h-auto bg-slate-200 relative   '>
    <h2 className="font-bold flex justify-start text-[2rem] px-5 text-slate-500">Order Information</h2>

        <div className='flex  justify-evenly h-[250px] px-10 py-4 border-2 border-solid border-slate-800'>
          <div className='w-[300px] h-auto px-5'>
            <h2 className='font-bold'>Shipping Address</h2>
            <p> First Name   Last Name</p>
            <p>  Address</p>
            <p>  City    State</p>
            <p> Pincode</p>

          </div>


          <div className='w-[200px] h-auto px-5'>
            <h2 className='font-bold'>Payment Method</h2>
            <p>By Card</p>

          </div>



          <div className='w-[300px] h-auto px-5'>
            <h2 className='font-bold'>Order Summary</h2>
            <p className='flex justify-between'>Items subbtotoal<span>{cart?.cart?.totalPrice}</span></p>
            
            <p className='flex justify-between'>Delivery Charges <span>20</span></p>
            <p className='flex justify-between'>Total<span>{cart?.cart?.totalPrice+20}</span></p>

          </div>

        </div>

        <h2 className="font-bold flex justify-start text-[1.5rem] px-5 text-slate-500">Items</h2>

        <div className="border-2 border-solid border-slate-800 mt-5 px-20 ">
        
<CartItems cart={cart} />
        </div>

        <div className='justify-between bg-white px-9   py-10  flex items-center h-[40px] rounded-b-xl' >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {

              setCurrentStep(1)
            }}
          >
            Previous
          </button>

          <button
            type='button'
            className=' bg-blue-800 w-[100px] h-[40px] rounded-md font-bold '
            onClick={() => {

              setCurrentStep(3)
            }}>
            Next

          </button>
        </div>
      </div>

    </>
  )
}

export default OrderSummary