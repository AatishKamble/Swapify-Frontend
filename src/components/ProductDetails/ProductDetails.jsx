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
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((store) => store.product);

  // State for favorite icon toggle
  const [isFavorite, setIsFavorite] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

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
                      <div className="flex h-[100vh] p-10 py-2">  
                      {/* Left Fixed Image + Buttons Section */}
                      <div className="sticky top-[70px] h-[calc(100vh-64px)] max-h-[452px] overflow-hidden py-5 pl-1">
                        <div className="relative border-4 border-solid ">
                              <img
                                src={product.product?.imageURL}
                                alt="Product Image"
                                className="object-fit  w-full h-[350px]"
                              />
                              
                              {/* Favorite Icon */}
                              <div 
                                className="absolute top-2 right-2 bg-slate-200 border-solid border-2 rounded-2xl cursor-pointer"
                                onClick={handleFavoriteToggle}>
                                {isFavorite ? (
                                  <FavoriteIcon className="h-8 w-7 p-1 text-pink-400" />
                                ) : (
                                  <FavoriteBorderIcon className="h-8 w-7 p-1 text-gray-500" />
                                )}
                              </div>

                            </div>
                            
                        

                          <div>  {/* Buttons */}
                              <div className="my-1 grid grid-cols-2 gap-6">
                              <button
                                onClick={handleAddToCart}
                                className="w-full h-12 mt-4 mb-4 font-semibold bg-[#e4472b] rounded-md flex justify-center items-center"
                              >
                                <ShoppingCartTwoToneIcon className="text-white" />
                                <span className="text-[1.2rem] text-white px-2">ADD TO CART</span>
                              </button>

                              <button className="w-full h-12 mt-4 mb-4 font-semibold bg-[#7589cc] rounded-md flex justify-center items-center">
                                <FlashOnIcon className="text-white" />
                                <span className="text-[1.2rem] text-white px-2">BUY NOW</span>
                              </button>
                              </div>
                          </div>

                </div>

                {/* description div */}
                <div className="flex-nowrap  pl-6 pr-10 py-5 w-[55vw] overflow-y-auto max-h-screen "> {/*main div of product Details */}

                  <div className='div-1'>
                    <div> 

                        <div className="font-serif text-slate-800 text-[2.5rem] pt-5">
                        {product.product?.title}
                        <hr/> 
                        </div>

                        <div className='rating and review flex space-x-1 py-2'>
                            {[...Array(5)].map((_, index) => {
                              const currentRating = index + 1;
                              return (
                                <StarBorderRoundedIcon
                                  key={index}
                                  className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
                                    currentRating <= (hover || rating) ? 'text-yellow-400 ' : 'text-gray-300'
                                  }`}
                                  onClick={() => setRating(currentRating)}
                                  onMouseEnter={() => setHover(currentRating)}
                                  onMouseLeave={() => setHover(null)}
                                />
                              );
                            })}
                        </div>

                        <div className='offers discount'></div>

                        <div className="flex gap-[4px] items-center ">{/* price section*/}

                          <div className="price i  text-black text-[28px]">
                            <span className='i '>₹ </span>
                            {product.product?.price}
                          </div>
                          <div className="original-price text-gray-500 line-through text-[16px]">
                            <span className='i ml-3'>₹ </span> {product.product?.originalPrice}
                          </div>
                          <div className="discount text-green-600 text-[16px] i ml-3">
                            <span>{Math.round(((product.product?.originalPrice - product.product?.price) / product.product?.originalPrice) * 100)}% off</span>
                          </div>

                        </div>

                        <div className='packing fee'></div>

                    </div>  
                  </div>

                  <div className='div-2'>{/* offers */}
                    <div>

                      <div className='available offers text-[16px] i'>Available offers</div>
                      <div className='bank offers grid grid-cols-1 pt-1'>
                        <span className='offers name'></span>
                        <div><LocalOfferRoundedIcon className='text-green-600'/> <span className='pl-2 i'>Bank Offer</span> </div>
                        <div><LocalOfferRoundedIcon className='text-green-600'/> <span className='pl-2 i'>Bank Offer</span> </div>
                        <div><LocalOfferRoundedIcon className='text-green-600'/> <span className='pl-2 i'>Bank Offer</span> </div>
                      
                      </div>

                    </div>
                  </div>

                  <div className='div-3 p-1 w-[25vw]'>
                    <div className='exchange or withoutexchange '>

                    <div className='border border-dotted i p-2 flex items-center justify-between  '> 
                      <input type='radio' className='scale-125 ' name='option' value="option1"></input> 
                      <div className='p-2'>Buy On The Doorsteps</div> 
                      <div className='ml-auto'>₹ {Math.round( (product.product?.price) + ((product.product?.price) * 20) / 100)}</div>
                      </div>

                    <div className='border border-dotted i p-2 flex items-center justify-between '> 
                      <input type='radio' className='scale-125 ' name='option' value="option2"></input> 
                      <div className='p-2'>Buy Direct From The Seller</div>
                      <div className='ml-auto'>₹ {product.product?.price}</div>
                      </div>
                        

                    </div>
                  </div>
                  
                  <div className='div-4'>
                    <div className='warranty'>

                      <div className='logo'> 
                      </div>
                      <div className='description'></div>
                      

                    </div>
                  </div>

                  <div className='div-5'>
                    <div className='color options'>
                      <div className='color'></div>
                      <div className='storage'></div>

                    </div>
                  </div>

                  <div className='div-6'>
                    <div className='delivery'>

                    <div className='delivery pincode'></div>
                    <div className='delivery time'></div>

                    </div>
                  </div>

                  <div className='div-7'>
                    <div className='highlights'>
                      
                      <div className='coloumn-1'></div>
                      <div className='coloumn-2'></div>

                    </div>
                  </div>

                  <div className='div-9'>
                    <div className='all the facilities '>

                        <div className='seller'></div>
                        <div className='product total cost'> </div>

                    </div>
                  </div>

                  {/* Product Description Section */}

                      <h2 className="text-[1.4rem] i text-slate-900 py-2">
                        Description</h2>
                      <p className="text-[1.4rem] font-semibold text-slate-600">
                        {product.product?.description}</p>

                </div> {/* main div of product details ends here */}





                </div>


    </>
  );
};

export default ProductDetails;
