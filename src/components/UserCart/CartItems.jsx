import { removeItemFromCart } from "../../State/Cart/Action";
import { useDispatch } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const CartItems = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClickToDelete(Id) {
    dispatch(removeItemFromCart(Id));
  }

  return (
                    <div className="p-6 w-full max-w-4xl mx-auto">
                    {cart.cart?.cartItems?.map((item) => (
                        <div
                        key={item?._id}
                        className="relative bg-white shadow-md border border-gray-100 rounded-lg flex items-center p-4 mb-4 hover:shadow-lg transition"
                        >
                        {/* Image Container */}
                        <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                            <img onClick={()=>navigate(`/product/${item?._id}`) }
                            src={item.product?.imageURL}
                            alt="product image"
                            className="w-full h-full object-contain "
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 px-6">
                            <p className="text-lg i font-semibold text-gray-900 mb-1">
                            {item.product?.title}
                            </p>
                            <p className="text-sm i text-gray-600 mb-2 line-clamp-2">
                            {item.product?.description}
                            </p>
                            <p className="text-xl text-gray-500">
                            ₹ {item.product?.price}
                            </p>
                        </div>

                        {/* Remove Button */}
                        {/* <button
                            className="absolute i top-3 right-3 px-4 py-1 text-sm font-semibold text-black rounded-md hover:bg-red-500 hover:text-white hover:shadow-xl transition-all"
                            onClick={() => handleClickToDelete(item._id)}
                        >
                            REMOVE  
                        </button> */}

                        <button className="relative group flex flex-col justify-center items-center p-4 bg-[rgba(100,77,237,0.08)] border-0 rounded-xl transition-all duration-200
                         hover:shadow-[3.4px_2.5px_4.9px_rgba(0,0,0,0.025),8.6px_6.3px_12.4px_rgba(0,0,0,0.035),17.5px_12.8px_25.3px_rgba(0,0,0,0.045),36.1px_26.3px_52.2px_rgba(0,0,0,0.055),99px_72px_143px_rgba(0,0,0,0.08)]">

                        < DeleteOutlinedIcon onClick={() => handleClickToDelete(item._id)}/>
                        
                        {/* Tooltip */}
                        <span className="absolute top-1/4 left-[105%] w-20 bg-[rgba(0,0,0,0.253)] text-white text-center text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            REMOVE
                            <span className="absolute top-1/2 right-full border-4 border-transparent border-r-[rgba(0,0,0,0.253)]"></span>
                        </span>

                        </button>

                        </div>
                    ))}
                    </div>
  );
};

export default CartItems;