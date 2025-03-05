import ProductsUpload from "./ProductsUpload.jsx";
import SellCategory from "./SellCategory.jsx";
import { useEffect, useState } from "react";
const SellProduct = () => {
    
    const [selectedCategory,setSelectedCategory]=useState(
        {
            mainCategory:"",
            subcategory:""
        }
    )


  
const backButton=()=>{
  setSelectedCategory({
    mainCategory:"",
    subcategory:""
})
}
   

    
  return (
    <>

{(selectedCategory.mainCategory=="" || selectedCategory.subcategory=="") && (
           
 <SellCategory onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
)}
 {selectedCategory.mainCategory && selectedCategory.subcategory && (
                <ProductsUpload selectedCategory={selectedCategory} backButton={backButton}/>
            )}



    </>
  )
}

export default SellProduct