import { useNavigate } from "react-router-dom";

const CartPriceDetails = ({ cart }) => {

  const navigate = useNavigate();
  // Calculate Discount (5% of Total Price)
  const discount = Math.round((cart.cart?.totalPrice * 5) / 100);

  // Calculate Total Amount (including 20% tax but subtracting the discount)
  const totalAmount = Math.round(cart.cart?.totalPrice - discount);


        return (
            <div className="bg-white shadow-lg h-[400px] w-[400px] sticky top-0 p-6 border border-gray-200 rounded-lg">
            {/* Header */}
            <div className="text-2xl i id border-b-2 border-gray-100 pb-2 text-gray-500">
                <p className="">PRICE DETAILS</p>
            </div>

            {/* Price Details */}
            <div className="text-lg font-serif py-4 mt-3 space-y-4">
                {/* Items Price */}
                <div className="flex i justify-between">
                <p className="text-gray-500">
                    Price <span className="text-gray-500">({cart.cart?.totalItems} items)</span>
                </p>
                <p className="i text-gray-500">₹{cart.cart?.totalPrice}</p>
                </div>

                {/* Delivery Charges */}
                <div className="flex i text-gray-500 justify-between">
                <p>Discount</p>
                <p className="text-green-600 i "> - ₹{discount}</p>
                </div>

                {/* Delivery Charges */}
                <div className="flex i text-gray-500 justify-between">
                <p>Delivery Charges</p>
                <p className="text-green-600 ">Free</p>
                </div>

                {/* Total Price */}
                <div className="flex justify-between border-t border-dashed border-gray-400 pt-4 i text-lg">
                <p>Total Amount</p>
                <p>₹{totalAmount}</p>
                </div>
            </div>

            {/* Proceed to Buy Button */}
            <div className="w-full mt-4">
                <button
                className="bg-orange-600 text-white px-5 w-full h-12 font-serif text-lg i rounded-md hover:shadow-xl transition-all"
                onClick={() => navigate("/checkout")}
                >
                PLACE ORDER
                </button>
            </div>
            </div>
        );
};

export default CartPriceDetails;
