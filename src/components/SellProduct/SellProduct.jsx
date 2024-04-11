import ProductsUpload from "./ProductsUpload.jsx";
import SellCategory from "./SellCategory.jsx";
import { useState } from "react";
const SellProduct = () => {
    
    const [selectedCategory,setSelectedCategory]=useState(
        {
            mainCategory:"",
            subcategory:""
        }
    )
    console.log("in main",selectedCategory);
  return (
    <>

  
 <SellCategory onSelectCategory={setSelectedCategory}/>





    </>
  )
}

export default SellProduct