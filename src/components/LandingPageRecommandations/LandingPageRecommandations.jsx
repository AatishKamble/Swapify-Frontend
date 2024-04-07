import Cart from "../cartComponent/Cart";

import { useState } from "react";
import product from "../../dataset.js";

import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { findProducts } from "../../State/Product/Action.js"
const items = [
    {
      price: 2000,
      description: "Lenovo Laptop Intel i7 Processor",
      address: "Pradhikaran, Nigdi",
      postedAgo: "2 days ago",
      image:"../../src/assets/lap.jpeg"
    },
    {
      price: 150,
      description: "Wireless Mouse",
      address: "123 Main Street, City",
      postedAgo: "1 day ago",
      image:"../../src/assets/mouse.jpeg"
    },
    {
      price: 500,
      description: "Bluetooth Earphones",
      address: "456 Oak Avenue, Town",
      postedAgo: "3 days ago",
      image:"../../src/assets/oneplus.png"
    },
    {
      price: 3000,
      description: "Samsung Galaxy Smartphone",
      address: "789 Pine Road, Village",
      postedAgo: "4 days ago",
      image:"../../src/assets/smasung.jpeg"
    },
    {
      price: 800,
      description: "External Hard Drive 1TB",
      address: "101 Elm Boulevard, Suburb",
      postedAgo: "5 days ago",
      image:"../../src/assets/hdd.jpeg"
    },
    {
      price: 100,
      description: "Wireless Keyboard",
      address: "210 Maple Lane, County",
      postedAgo: "6 days ago",
      image:"../../src/assets/keyboard.jpeg"
    },
    {
      price: 1200,
      description: "Apple iPad 10.2-inch",
      address: "303 Cedar Street, Hamlet",
      postedAgo: "1 week ago",
      image:"../../src/assets/ipad.jpeg"
    },
    {
      price: 250,
      description: "USB-C Hub Adapter",
      address: "404 Birch Court, Manor",
      postedAgo: "2 weeks ago",
      image:"../../src/assets/adapter.jpeg"
    },
    
  ];
  



export const LandingPageRecommandations = () => {
  
  
  const dispatch=useDispatch();
  const recommandationProducts=useSelector(store=>store.product);
  const [ItemsToShow,setItemsToShow]=useState(10);

 
const sortBy="Date-Created";
  useEffect(()=>{
   const data = {
      category: [] ,
      minPrice:0,
      maxPrice:1000000,
      sort: sortBy,
      pageNumber:0,
      pageSize:0
    }
dispatch(findProducts(data));

  },[sortBy]);

  const handleLoadMore = () => {
 setItemsToShow(pre=>pre+10)
  };
  


  return (
    <>
   
<div className="w-full grid justify-center mb-10">
<div className=" border-b-2 border-solid  border-gray-900 m-4 mb-8 mx-0">
  <p className="text-[2rem]">Recommandations</p>
  </div>
    <div className="grid justify-center grid-cols-4 gap-8  ">
    {recommandationProducts.products?.content?.slice(0,ItemsToShow).map((item, index) => (
      <Cart key={index} productName={item?.title} productImage={item?.imageURL} productPrice={item?.price} dateCreated={item?.createdAt} productId={item?._id} />
    ))}



   </div>
   {ItemsToShow <=recommandationProducts.products?.content?.length &&
        <div className="w-full flex justify-center m-10">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleLoadMore}>
            <span>Load More</span>
          </button>
        </div>
     }

   </div>
 </> )
}
