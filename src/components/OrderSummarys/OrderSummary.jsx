import CartItems from "../UserCart/CartItems";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../State/Cart/Action.js";
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";

const OrderSummary = ({ setCurrentStep }) => {
  const cart = useSelector((store) => store.cart);
  const auth = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserCart());
  }, [cart.deleteCartItem]);

  useEffect(() => {
    window.scrollTo(1, 1);
  });

  return (
    <div className="w-full h-auto bg-inherit relative px-8 py-6">
      {/* Header */}
      <h2 className="font-bold text-[2rem] text-slate-600">Order Information</h2>

      {/* Order Details Section */}
      <div className="flex justify-between h-auto px-8 py-6 border-2 border-slate-200 shadow-md rounded-lg bg-white mt-4">
        {/* Shipping Address */}
        <div className="w-[300px]">
          <h2 className="font-bold text-lg text-gray-800 mb-2">Shipping Address</h2>
          <p className="text-gray-700 font-semibold">{auth.user?.firstName} {auth.user?.lastName}</p>
          <p className="text-gray-600">Address</p>
          <p className="text-gray-600">City, State</p>
          <p className="text-gray-600">Pincode</p>
        </div>

        {/* Payment Method */}
        <div className="w-[200px]">
          <h2 className="font-bold text-lg text-gray-800 mb-2">Payment Method</h2>
          <p className="text-gray-700">By Card</p>
        </div>

        {/* Order Summary */}
        <div className="w-[300px]">
          <h2 className="font-bold text-lg text-gray-800 mb-2">Order Summary</h2>
          <p className="flex justify-between text-gray-700">
            Items Subtotal <span className="font-semibold">₹{cart?.cart?.totalPrice}</span>
          </p>
          <p className="flex justify-between text-gray-700">
            Delivery Charges <span className="font-semibold">Free</span>
          </p>
          <p className="flex justify-between text-gray-900 font-bold">
            Total <span>₹{cart?.cart?.totalPrice}</span>
          </p>
        </div>
      </div>

      {/* Products Section */}
      <h2 className="mt-10 font-bold text-[1.5rem] text-slate-600">PRODUCTS</h2>
      <div className="border-2 border-slate-800 mt-5 px-10 py-6 rounded-lg shadow-md bg-white">
        <CartItems cart={cart} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-inherit px-5 py-6 mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
          type="button"
          onClick={() => setCurrentStep(1)}
        >
          <FaArrowLeft />
        </button>

        <button
          type="button"
          className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
          onClick={() => setCurrentStep(3)}
        >
          <FaArrowRight />

            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
