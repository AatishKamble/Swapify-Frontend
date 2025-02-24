import { removeItemFromCart } from "../../State/Cart/Action";
import { useDispatch } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

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
                            className="w-full h-full object-cover"
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
                            <p className="text-xl i font-bold text-gray-800">
                            ₹ {item.product?.price}
                            </p>
                        </div>

                        {/* Remove Button */}
                        <button
                            className="absolute i top-3 right-3 px-4 py-1 text-sm font-semibold text-black rounded-md hover:bg-red-500 hover:text-white hover:shadow-xl transition-all"
                            onClick={() => handleClickToDelete(item._id)}
                        >
                            REMOVE
                        </button>
                        </div>
                    ))}
                    </div>
  );
};

export default CartItems;