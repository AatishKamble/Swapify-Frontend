import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([
    {
      _id: "1",
      product: {
        imageURL: "https://via.placeholder.com/150",
        title: "Product 1",
        description: "This is a great product with many features.",
        price: 1000,
      },
    },
    {
      _id: "2",
      product: {
        imageURL: "https://via.placeholder.com/150",
        title: "Product 2",
        description: "An amazing product that you'll love.",
        price: 2000,
      },
    },
    {
      _id: "3",
      product: {
        imageURL: "https://via.placeholder.com/150",
        title: "Product 3",
        description: "A must-have item with incredible benefits.",
        price: 1500,
      },
    },
  ]);

  function handleClickToDelete(Id) {
    setWishlist(wishlist.filter((item) => item._id !== Id));
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
            
          <div
            key={item._id}
            className="relative bg-white shadow-md border border-gray-100 rounded-lg flex items-center p-4 mb-4 hover:shadow-lg transition"
          >
            {/* Image Container */}
            <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
              <img
                onClick={() => navigate(`/product/${item._id}`)}
                src={item.product.imageURL}
                alt="product image"
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 px-6">
              <p className="text-lg font-semibold text-gray-900 mb-1">{item.product.title}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.product.description}</p>
              <p className="text-xl text-gray-500">₹ {item.product.price}</p>
            </div>

            {/* Remove Button */}
            <button
              className="relative group flex flex-col justify-center items-center p-4 bg-[rgba(100,77,237,0.08)] border-0 rounded-xl transition-all duration-200
                         hover:shadow-[3.4px_2.5px_4.9px_rgba(0,0,0,0.025),8.6px_6.3px_12.4px_rgba(0,0,0,0.035),17.5px_12.8px_25.3px_rgba(0,0,0,0.045),36.1px_26.3px_52.2px_rgba(0,0,0,0.055),99px_72px_143px_rgba(0,0,0,0.08)]"
              onClick={() => handleClickToDelete(item._id)}
            >
              <DeleteOutlinedIcon />
              {/* Tooltip */}
              <span className="absolute top-1/4 left-[105%] w-20 bg-[rgba(0,0,0,0.253)] text-white text-center text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                REMOVE
                <span className="absolute top-1/2 right-full border-4 border-transparent border-r-[rgba(0,0,0,0.253)]"></span>
              </span>
            </button>
          </div>
        ))
      ) : (
       
        <div className="flex justify-center items-center min-w-screen  ">
        <img
          src="src/assets/Empty-wishlist.png" 
          alt="Empty Wishlist" 
          className="w-[40vw] max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out hover:scale-105 "
          onClick={() => navigate("/items")}
        />
      </div>
      
      )}
    </div>
  );
};

export default Wishlist;
