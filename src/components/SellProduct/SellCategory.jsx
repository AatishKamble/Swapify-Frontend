import { useState } from "react";
import {useNavigate} from "react-router-dom"
const SellCategory = ({ onSelectCategory }) => {
  const [selectedParentCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [open, setOpen] = useState(false);
const navigate=useNavigate();
  const categories = ["Books & Study Materials","Electronic","Photography & Videography","Clothing & Accessories","Furniture & Home Essentials","Gaming & Accessories", "Sports & Fitness","Toy","Miscellaneous"];

  const subcategories = {

    Electronic: ["Mobile Phones & Tablets", "Laptops & Accessories", "Cameras"," Headphones & Speakers","Smartwatches & Gadgets","Desktops & Monitors","Keyboards & Mice","Wi-Fi Routers & Modems","Cables & Adapters","USB Hubs"],
    "Books & Study Materials" : ["Fiction", "Non-fiction", "Fantasy","Textbooks & Reference Books" ,"Notebooks & Stationery"],
    Toy: ["Action Figures", "Board Games", "Puzzles"],
    "Furniture & Home Essentials" : ["Desks & Chairs","Beds & Mattresses","Kitchen Appliances"],
    "Clothing & Accessories" : ["Formal Wear"," Casual Wear","Shoes & Bags"],
    Miscellaneous : ["Sports & Fitness Equipment ","Hobby & Musical Instruments"],
    "Gaming & Accessories": ["Gaming Consoles & Controllers","VR Headsets & Simulators","Gaming Chairs & Desks"],
    "Photography & Videography":["DSLR & Mirrorless Cameras","Camera Accessories","Lighting & Studio Equipment"],
    "Sports & Fitness":["Dumbbells & Resistance Bands","Yoga Mats & Foam Rollers","Footballs & Basketballs","Cricket Bats & Kits","Badminton & Tennis Rackets"]

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
   <div className="my-5 mx-auto w-[300px] font-bold text-[2.5rem] text-slate-600">
   <h2>Select Category </h2>
   </div>

      <div className='bg-slate-100 w-[650px] h-[500px] border-1 border-solid border-slate-800 flex mx-auto my-10 px-1 rounded-xl'>
        
     
        <div className=" w-[300px] h-full"> {/*first category */}

          {
            categories.map((item, index) => {
              return (<div onClick={() => handleParentCategory(item)}
                className="bg-gray-400 inter-new hover:bg-gray-300 w-full h-[50px] px-2 my-1 flex items-center text-[1.2rem] text-slate-900  rounded-md">
                <p>{item}</p>
              </div>)
            })
          }

        </div>
         {/* second category */}

        {
          open &&
          <div className=" border-x-2 border-solid border-slate-100 w-[300px] h-full mx-1">
{
subcategories[selectedParentCategory].map((item,index)=>{
        return(
            <div onClick={() => handlesubCategory(item)}
              className="bg-gray-400 inter-new hover:bg-gray-300 w-full h-[30px] px-2 my-1 flex items-center text-[1.1 rem] text-slate-900 from-neutral-900 rounded-md">
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