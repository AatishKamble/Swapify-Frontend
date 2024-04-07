import React,{useEffect} from 'react'
import products from '../../dataset'
import {useSelector,useDispatch} from 'react-redux';
import { useParams,useNavigate} from 'react-router-dom';
import {findProductById} from "../../State/Product/Action.js"
import {addToCart, getUserCart} from "../../State/Cart/Action.js";
const ProductDetails = () => {
const params=useParams();
const dispatch=useDispatch();
const navigate=useNavigate();
const product=useSelector(store=>store.product);

useEffect(()=>{
  const data={
    productId:params.productId
  }
  dispatch(findProductById(data));
  

},[params.productId]);


function handleAddToCart(){

  const data={
    productId:params.productId
  }
  dispatch(addToCart(data));
  dispatch(getUserCart());
navigate("/cart")
}


  return (
   <>
  <div className='w-auto h-full bg-[#d2ebf0]  '>
<div className='flex p-10 bg-[#d2ebf0] my-2 justify-evenly'>
    <div className=' h-auto '>

    <img src={product.product?.imageURL} alt="this is sample image" className=' object-cover' />
    
    
    </div>

    <div className='bg-[#CEE6F2] px-10 font-bold w-[450px] mx-2  py-4 pt-2 border-solid border-2 border-[#1995AD] h-auto'>
        <p className='font-serif text-slate-800 text-[2.5rem] py-5 '>{product.product?.title} </p>
        <p className='font-serif text-gray-500 text-[1.75rem] py-1'><span>$  </span>{product.product?.price}</p>
       
        <div className='h-full pt-10'>
        <button  onClick={handleAddToCart} className='font-serif h-[45px] bg-blue-900 rounded-xl w-full px-5 py-1 flex justify-center items-center my-3'><span className='text-[1.4rem]'>Add to Cart</span></button>
        <button className='font-serif h-[45px] bg-slate-500 border-solid border-2 border-black rounded-xl w-full px-5 py-1 flex justify-center items-center my-6'><span className='text-[1.4rem]'>Add to Wishlist</span></button>
</div>
    </div>

    </div>
    <div className=' bg-[#E4EA8C]px-10 font-bold w-[60%]  mx-2 py-6 h-auto'>
    <div className='bg-[#E4EA8C] mx-32 p-3'>
      <h2 className='text-[1.4rem] font-semibold text-slate-900 py-2'>Discription</h2>
      <p className='text-[1.4rem] font-semibold text-slate-600'>

      {product.product?.description}
      </p>
       </div>
    </div>

   

    
  </div>
   
   </>
  )
}

export default ProductDetails