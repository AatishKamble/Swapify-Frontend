import { useNavigate } from "react-router-dom";

const CartPriceDetails = ({ cart }) => {
  const navigate = useNavigate();

  // Calculate Discount (5% of Total Price)
  const discount = Math.round((cart.cart?.totalPrice * 5) / 100);

  // Calculate Total Amount (subtracting the discount)
  const totalAmount = Math.round(cart.cart?.totalPrice - discount);

  return (
    <div className="bg-white i shadow-lg h-[400px] w-[400px] sticky top-0 p-6 border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="text-2xl font-semibold border-b-2 border-gray-100 pb-2 text-gray-500">
        <p>PRICE DETAILS</p>
      </div>

      {/* Price Details */}
      <div className="text-lg i py-4 mt-3 space-y-4">
        {/* Items Price */}
        <div className="flex justify-between text-gray-500">
          <p>
            Price <span className="text-gray-400 ">({cart.cart?.totalItems} items)</span>
          </p>
          <p className="text-gray-500">₹{cart.cart?.totalPrice}</p>
        </div>

        {/* Discount */}
        <div className="flex justify-between text-gray-500">
          <p>Discount</p>
          <p className="text-green-600">- ₹{discount}</p>
        </div>

        {/* Delivery Charges */}
        <div className="flex justify-between text-gray-500">
          <p>Delivery Charges</p>
          <p className="text-green-600">Free</p>
        </div>

        {/* Total Price */}
        <div className="flex justify-between border-t border-dashed border-gray-400 pt-4 text-lg">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
      </div>

      {/* Proceed to Buy Button with Animation on Top Right */}
      <div className="w-full mt-4 relative">
        <button
          className="bg-orange-600 text-white px-5 w-full h-12 font-serif text-lg rounded-md hover:shadow-xl transition-all relative"
          onClick={() => navigate("/checkout")}
        >
          PLACE ORDER
          {/* Animation in the top-right corner */}
          <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-600 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
          </span>

        </button>
      </div>
    </div>
  );
};

export default CartPriceDetails;
