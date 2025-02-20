import React, { useEffect, useState } from 'react';
import products from '../../dataset';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { findProductById } from '../../State/Product/Action.js';
import { addToCart, getUserCart } from '../../State/Cart/Action.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((store) => store.product);

  // State for favorite icon toggle
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const data = {
      productId: params.productId,
    };
    dispatch(findProductById(data));
  }, [params.productId, dispatch]);

  const handleAddToCart = () => {
    const data = {
      productId: params.productId,
    };
    dispatch(addToCart(data));
    dispatch(getUserCart());
    navigate('/cart');
  };

  // Handle Favorite Toggle
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="w-auto h-full">
        <div className="flex p-10 my-2 justify-evenly">
          <div>
            {/* Image Container with Favorite Icon */}
            <div className="relative h-auto">
              <img
                src={product.product?.imageURL}
                alt="Product Image"
                className="object-fit w-[450px] h-[350px]"
              />
              
              {/* Favorite Icon */}
              <div 
                className="absolute top-2 right-2 bg-slate-200 border-solid border-2 rounded-2xl cursor-pointer"
                onClick={handleFavoriteToggle}
              >
                {isFavorite ? (
                  <FavoriteIcon className="h-8 w-7 p-1 text-pink-400" />
                ) : (
                  <FavoriteBorderIcon className="h-8 w-7 p-1 text-gray-500" />
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex place-items-baseline my-1 gap-5">
              <button
                onClick={handleAddToCart}
                className="flex-1 font-semibold bg-[#e4472b] border-1 rounded-md w-1 px-4 py-1 flex justify-center items-center my-3">
                  <ShoppingCartTwoToneIcon className=" text-white "/>
                <span className="text-[1.4rem] text-white p-2">ADD TO CART</span>
              </button>

              <button className="font-semibold flex-1 bg-[#7589cc] border-solid border-1 rounded-md w-1 px-4 py-1 flex justify-center items-center my-6">
                <FlashOnIcon className=" text-white" />
                <span className="text-[1.4rem] text-white p-2 ">BUY NOW</span>
              </button>
            </div>
          </div>

          {/* Description Side */}
          <div className="px-10 font-bold mx-2 py-4 pt-2 h-auto">
            <p className="font-serif text-slate-800 text-[2.5rem] pt-5">
              {product.product?.title}
              <hr/>
            </p>

            <p className="font-serif text-gray-500 font-normal text-[1rem]">
              <span>
                Powerful AMD 7000 Series Mobile Processors 35.56cms (14) FHD
                display with low-blue light to reduce eye strain
              </span>
            </p>

            <p className="font-serif text-gray-500 text-[1.75rem] py-1">
              <span>₹ </span>
              {product.product?.price}
            </p>
          </div>
        </div>
      
        {/* Product Description Section */}
        <div className="bg-inherit px-10 font-bold w-[60%] mx-2 py-6 h-auto">
          <div className="border-[1px] mx-32 p-3">
            <h2 className="text-[1.4rem] font-semibold text-slate-900 py-2">
              Description
            </h2>
            <p className="text-[1.4rem] font-semibold text-slate-600">
              {product.product?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
