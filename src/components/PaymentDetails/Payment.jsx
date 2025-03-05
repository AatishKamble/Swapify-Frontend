import { useEffect } from "react";

const Payment = ({ setCurrentStep }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <div className="w-full max-w-xl bg-white shadow-lg rounded-xl mx-auto">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center rounded-t-xl">
        <h2 className="text-blue-100 font-semibold text-lg">Payment Information</h2>
      </div>

      {/* Form */}
      <form className="px-6 py-6 space-y-5">
        {/* Pay by Card Title */}
        <div>
          <p className="text-xl font-semibold text-gray-600">Pay by Card</p>
        </div>

        {/* Card Holder Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name of Card Holder</label>
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="cardHolder"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Card Number</label>
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="cardNumber"
            type="password"
            placeholder="Enter Card Number"
          />
        </div>

        {/* Expiry Month & CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Expiry Month</label>
            <input
              className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none"
              id="ExpiryMonth"
              type="month"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">CVC</label>
            <input
              className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none"
              id="CVC"
              type="password"
              placeholder="Enter CVC"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
            type="button"
            onClick={() => setCurrentStep(2)}
          >
            Previous
          </button>

          <button
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
            type="submit"
          >
            Place Order
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
