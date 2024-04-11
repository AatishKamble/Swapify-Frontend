

import { useState } from "react";
import {useNavigate} from "react-router-dom"
const SellCategory = ({ onSelectCategory }) => {
  const [selectedParentCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [open, setOpen] = useState(false);
const navigate=useNavigate();
  const categories = ["Electronic", "Books", "Toy"];
  const subcategories = {
    Electronic: ["Smartphones", "Laptops", "Cameras"],
    Books: ["Fiction", "Non-fiction", "Fantasy"],
    Toy: ["Action Figures", "Board Games", "Puzzles"]
  };

  function handleParentCategory(item) {
    if (item !== selectedParentCategory) {
      setSelectedCategory(item)
      setOpen(true);
    }
    if (item === selectedParentCategory) {
      setOpen(!open)
    }

    console.log(selectedParentCategory)
  }


  function handlesubCategory(item) {
    if (item !== selectedSubCategory) {
      setSelectedSubCategory(item)
      onSelectCategory(prev=>({...prev,mainCategory:selectedParentCategory,subcategory:selectedSubCategory}))
      navigate("/sell-product-detail")
    }

    console.log(selectedSubCategory)
  }
  return (
    <>
   <div className="my-2 mx-auto w-[500px] font-bold text-[2rem] text-slate-600">
   <h2>Select Category </h2>
   </div>

      <div className='bg-slate-100 w-[500px] h-[500px] border-2 border-solid border-slate-900 flex mx-auto my-10 px-1'>
        
     
        <div className="bg-slate-200 w-[200px] h-full">

          {
            categories.map((item, index) => {
              return (<div onClick={() => handleParentCategory(item)}
                className="bg-gray-400 hover:bg-gray-600 w-full h-[50px] px-2 my-1 flex items-center text-[1.25rem] text-slate-900 font-semibold">
                <p>{item}</p>
              </div>)
            })
          }

        </div>
        {/*subca*/}

        {
          open &&
          <div className="bg-slate-200 border-x-2 border-solid border-slate-200  w-[200px] h-full mx-1">
{
subcategories[selectedParentCategory].map((item,index)=>{
        return(
            <div onClick={() => handlesubCategory(item)}
              className="bg-gray-400 hover:bg-gray-600 w-full h-[50px] px-2 my-1 flex items-center text-[1.25rem] text-slate-900 font-semibold">
              <p>{item}</p>
            </div>
            )
})
}



          </div>}
      </div>

    </>
  )
}

export default SellCategory