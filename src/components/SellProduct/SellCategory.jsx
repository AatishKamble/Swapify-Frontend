import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SellCategory = ({onSelectCategory,selectedCategory}) => {
 
  const [open, setOpen] = useState(false);
  const nav= useNavigate()
  const categories = ["Books & Study Materials", "Electronic", "Photography & Videography", "Clothing & Accessories", "Furniture & Home Essentials", "Gaming & Accessories", "Sports & Fitness", "Toy", "Miscellaneous"];

  const subcategories = {
    Electronic: ["Mobile Phones & Tablets", "Laptops & Accessories", "Cameras", "Headphones & Speakers", "Smartwatches & Gadgets", "Desktops & Monitors", "Keyboards & Mice", "Wi-Fi Routers & Modems", "Cables & Adapters", "USB Hubs"],
    "Books & Study Materials": ["Fiction", "Non-fiction", "Fantasy", "Textbooks & Reference Books", "Notebooks & Stationery"],
    Toy: ["Action Figures", "Board Games", "Puzzles"],
    "Furniture & Home Essentials": ["Desks & Chairs", "Beds & Mattresses", "Kitchen Appliances"],
    "Clothing & Accessories": ["Formal Wear", "Casual Wear", "Shoes & Bags"],
    Miscellaneous: ["Sports & Fitness Equipment", "Hobby & Musical Instruments"],
    "Gaming & Accessories": ["Gaming Consoles & Controllers", "VR Headsets & Simulators", "Gaming Chairs & Desks"],
    "Photography & Videography": ["DSLR & Mirrorless Cameras", "Camera Accessories", "Lighting & Studio Equipment"],
    "Sports & Fitness": ["Dumbbells & Resistance Bands", "Yoga Mats & Foam Rollers", "Footballs & Basketballs", "Cricket Bats & Kits", "Badminton & Tennis Rackets"]
  };

  function handleParentCategory(item) {
    if (item !== selectedCategory.mainCategory) {
      onSelectCategory(prev=>( {...prev,mainCategory:item}));
      setOpen(true);
    }
    if (item === selectedCategory.mainCategory) {
      setOpen(!open);
    }
  }

  function handlesubCategory(item) {
    if (item !== selectedCategory.subcategory) {
      onSelectCategory(prev=>( {...prev,subcategory:item}));
      
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Select Category
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Categories */}
            <div className="w-full md:w-1/2 space-y-2">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleParentCategory(item)}
                  className={`w-full px-4 py-3 text-left rounded-lg transition-all duration-200 
                    ${selectedCategory.mainCategory === item 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    text-sm font-medium `}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Sub Categories */}
            {open && (
              <div className="w-full md:w-1/2 space-y-2 border-l border-gray-200 pl-6">
                {subcategories[selectedCategory.mainCategory]?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handlesubCategory(item)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-all duration-200
                      ${selectedCategory.subcategory === item 
                        ? 'bg-green-500 text-white shadow-md' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }
                      text-sm font-medium hover:ring-2 hover:ring-green-400 focus:outline-none  focus:ring-opacity-5`
                    
                    }
                    
                      
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCategory;