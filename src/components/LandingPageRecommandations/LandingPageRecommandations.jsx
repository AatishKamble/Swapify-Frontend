import Cart from "../cartComponent/Cart"
import { useState } from "react";
const items = [
    {
      price: 2000,
      description: "Lenovo Laptop Intel i7 Processor",
      address: "Pradhikaran, Nigdi",
      postedAgo: "2 days ago"
    },
    {
      price: 150,
      description: "Wireless Mouse",
      address: "123 Main Street, City",
      postedAgo: "1 day ago"
    },
    {
      price: 500,
      description: "Bluetooth Earphones",
      address: "456 Oak Avenue, Town",
      postedAgo: "3 days ago"
    },
    {
      price: 3000,
      description: "Samsung Galaxy Smartphone",
      address: "789 Pine Road, Village",
      postedAgo: "4 days ago"
    },
    {
      price: 800,
      description: "External Hard Drive 1TB",
      address: "101 Elm Boulevard, Suburb",
      postedAgo: "5 days ago"
    },
    {
      price: 100,
      description: "Wireless Keyboard",
      address: "210 Maple Lane, County",
      postedAgo: "6 days ago"
    },
    {
      price: 1200,
      description: "Apple iPad 10.2-inch",
      address: "303 Cedar Street, Hamlet",
      postedAgo: "1 week ago"
    },
    {
      price: 250,
      description: "USB-C Hub Adapter",
      address: "404 Birch Court, Manor",
      postedAgo: "2 weeks ago"
    },
    {
      price: 100,
      description: "Wireless Keyboard",
      address: "210 Maple Lane, County",
      postedAgo: "6 days ago"
    },
    {
      price: 1200,
      description: "Apple iPad 10.2-inch",
      address: "303 Cedar Street, Hamlet",
      postedAgo: "1 week ago"
    },
    {
      price: 250,
      description: "USB-C Hub Adapter",
      address: "404 Birch Court, Manor",
      postedAgo: "2 weeks ago"
    }
  ];
  
export const LandingPageRecommandations = () => {
  const ItemsToShow=7;
  const [itemsToShow, setItemsToShow] = useState(ItemsToShow); // Initial number of items to display
  const [loading,setLoading]=useState(false);
  const handleLoadMore = () => {
    
    setItemsToShow(prevItemsToShow => prevItemsToShow + ItemsToShow);
  };
  
  return (
    <>
   
<div className="w-full grid justify-center mb-10">
<div className=" border-b-2 border-solid  border-gray-900 m-4 mb-8 mx-0">
  <p className="text-[2rem]">Recommandations</p>
  </div>
    <div className="grid justify-center grid-cols-3 gap-8  ">
    {items.slice(0, itemsToShow).map((item, index) => (
        <Cart key={index} price={item.price} description={item.description} address={item.address} postedAgo={item.postedAgo} />
      ))}



   </div>
   {itemsToShow < items.length && (
        <div className="w-full flex justify-center m-10">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleLoadMore}>
            <span>Load More</span>
          </button>
        </div>
      )}

   </div>
 </> )
}
