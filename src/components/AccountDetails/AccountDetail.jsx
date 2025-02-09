
import React from 'react';

const AccountDetail = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Personal Information</span>
          <span className="text-blue-500 cursor-pointer">Edit</span>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                name="firstName"
                required
                disabled
                value="John"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                name="lastName"
                required
                disabled
                value="Doe"
              />
            </div>
          </div>
          <div className="mb-4">
            
            <div className="flex items-center">
              <label className="flex items-center mr-4">
               
                
              </label>
              <label className="flex items-center">
               
                
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Email Address</span>
          <span className="text-blue-500 cursor-pointer">Edit</span>
        </div>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          name="email"
          required
          disabled
          value="sourabhjoshi6046@gmail.com"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Mobile Number</span>
          <span className="text-blue-500 cursor-pointer">Edit</span>
        </div>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          name="mobileNumber"
          required
          disabled
          value="+918767544121"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="text-lg font-semibold mb-4">FAQs</div>
        <div className="space-y-4">
          <h4 className="font-semibold">What happens when I update my email address (or mobile number)?</h4>
          <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          <h4 className="font-semibold">When will my account be updated with the new email address (or mobile number)?</h4>
          <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
          <h4 className="font-semibold">What happens to my existing account when I update my email address (or mobile number)?</h4>
          <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional.</p>
          <h4 className="font-semibold">Does my seller account get affected when I update my email address?</h4>
          <p>Any changes will reflect in your Seller account also.</p>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full bg-red-500 text-white p-2 rounded mb-2">Deactivate Account</button>
        <button className="w-full bg-red-700 text-white p-2 rounded">Delete Account</button>
      </div>
    </div>
  );
};

export default AccountDetail;