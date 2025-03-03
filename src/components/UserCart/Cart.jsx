import { useEffect } from "react";
import product from "../../dataset.js";
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux';
import { getUserCart } from "../../State/Cart/Action.js";
import { findProductById } from "../../State/Product/Action.js";
import CartPriceDetails from "./CartPriceDetails.jsx";
import CartItems from "./CartItems.jsx";
const Cart = () => {

    const cart = useSelector(store => store.cart);
    const auth = useSelector(store => store.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {

        dispatch(getUserCart());

    }, [cart.cart]);







    return (
        <>
            {(auth.user && cart.cart?.totalItems) ?

                <div className='w-full flex pb-20  h-auto justify-evenly py-8 overflow-y-scroll my-2  '>

                <div className="w-[60%] pb-10">
                    <div className=" ms-10 h-[800px]   ">
                    <CartItems cart={cart} />

                    </div>


                    </div>
                    <CartPriceDetails cart={cart} />


                </div>





                :
                <div className="w-full h-[500px]  flex flex-col justify-center items-center">

                    <div>
                        <p className="text-[3rem] i text-slate-600">Sorry Your Cart is Empty</p>
                    </div>

                    <div className="relative cursor-pointer w-[25vw] h-[50vh] mt-5  rounded-full" onClick={() => navigate("/items")}>
                        <img src="../../src/assets/E-commerce shopping cart.png" alt="cart empty" className=" object-cover rounded-full hover:scale-105 transition-all duration-300 ease-in-out" />
                    </div>
                </div>
            }
        </>
    )
}

export default Cart