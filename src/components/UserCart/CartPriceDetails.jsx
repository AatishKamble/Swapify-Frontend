import {useNavigate} from "react-router-dom"
const CartPriceDetails = ({cart}) => {

    const navigate=useNavigate();
  return (
   <>

<div className="bg-[#ebe9db] h-[400px] w-[400px] sticky top-0 p-5 border-2 border-[#FCF6F5FF]">

<div className="text-[1.5rem] font-serif font-normal border-b-2 border-slate-800  ">

    <p >
        Price Details
    </p>
</div>

<div className="text-[1.25rem] font-serif py-4 mt-2 ">
    <div className=" flex justify-between">
        <p>
            Price <span >({cart.cart?.totalItems} items)</span>
        </p>

        <p className=" align-middle font-sans">
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
    <button className="bg-[#abb0e2] px-5 font-serif text-[1rem] w-full h-[2.5rem] font-semibold rounded-xl " onClick={()=>navigate("/checkout")}> <span>Proceed To Buy</span></button>

</div>

</div>

   </>
  )
}

export default CartPriceDetails