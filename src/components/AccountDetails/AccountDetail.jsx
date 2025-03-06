import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { cancelRequest, getSellProducts } from '../../State/Product/Action';
import { useNavigate } from 'react-router-dom';

const AccountDetail = () => {
  const user = useSelector(store => store.auth);
  console.log(user)
  const product = useSelector(store => store.product);
  console.log("inacc", product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   function cancelReq(id) {
   dispatch(cancelRequest(id));
  
  }



  useEffect(() => {
    dispatch(getSellProducts());
  }, [dispatch]);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What happens when I update my email address (or mobile number)?",
      answer: "Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number)."
    },
    {
      question: "When will my account be updated with the new email address (or mobile number)?",
      answer: "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes."
    },
    {
      question: "What happens to my existing account when I update my email address (or mobile number)?",
      answer: "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional."
    },
    {
      question: "Does my seller account get affected when I update my email address?",
      answer: "Any changes will reflect in your Seller account also."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <input type="text" value={user.user?.firstName} className="w-full p-2 border border-gray-300 rounded" name="firstName" required />
            </div>
            <div>
              <input type="text" value={user.user?.lastName} className="w-full p-2 border border-gray-300 rounded" name="lastName" required />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Email Address</span>
          <span className="text-blue-500 cursor-pointer">Edit</span>
        </div>
        <input type="text" value={user.user?.email} className="w-full p-2 border border-gray-300 rounded" name="email" required />
      </div>

      {/* <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Mobile Number</span>
          <span className="text-blue-500 cursor-pointer">Edit</span>
        </div>
        <input type="text"   className="w-full p-2 border border-gray-300 rounded" name="mobileNumber" required />
      </div> */}

 <div className="p-6 w-full max-w-5xl mx-auto">
        {Array.isArray(product.products)&&product.products?.map((item) => (
          <div key={item?._id} className="relative bg-white shadow-lg border border-gray-200 rounded-xl flex items-center p-6 mb-6 hover:shadow-xl transition duration-300">
            <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
              <img onClick={() => navigate(`/product/${item?._id}`)} src={item.images[0]?.imageUrl} alt="Product" className="w-full h-full object-cover cursor-pointer transition duration-300 hover:scale-105" />
            </div>
            <div className="flex-1 w-6 px-4">
              <p className="text-lg font-semibold text-gray-900">{item?.productName}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2 break-words">{item?.productDescription}</p>
              <p className="text-xl text-indigo-600 font-semibold">₹ {item?.expectedPrice}</p>
            </div>
            <div className="flex-1 px-6 text-gray-700">
              <p className="text-md font-medium">{item?.address?.[0]?.street}</p>
              <p className="text-sm">{item?.address?.[0]?.village}, {item?.address?.[0]?.city}</p>
              <p className="text-sm">{item?.address?.[0]?.state} - {item?.address?.[0]?.pincode}</p>
            </div>
            <div className="flex-1 px-6">
              <p className="text-md font-semibold text-indigo-700">{item?.category?.name}</p>
              <p className="text-sm text-gray-500">{item?.category?.parentCategory?.name}</p>
            </div>
            { item.state === "cancelrequest"? <span className='text-red-500'>canceled request</span> :
              <button onClick={() => cancelReq(item?._id)} className="relative group flex items-center justify-center p-3 bg-red-50 border border-red-300 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
                <DeleteOutlinedIcon />
                <span className="absolute top-1/2 left-[110%] w-20 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Cancel Request
                  <span className="absolute top-1/2 right-full border-4 border-transparent border-r-gray-800"></span>
                </span>
              </button>
            }
          </div>
        ))}
      </div>
      

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="text-lg font-semibold mb-4">FAQs</div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button className="w-full text-left font-semibold text-gray-900 flex justify-between items-center py-2 focus:outline-none" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>

            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex">
        <button className="w-full text-red-400 p-2 rounded mb-2">Deactivate Account</button>
        <button className="w-full text-red-400 p-2 rounded">Delete Account</button>
      </div>
    </div>
  );
};

export default AccountDetail;