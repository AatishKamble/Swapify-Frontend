import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getUserProfile, logout } from '../../State/Auth/Action.js';
import { AiTwotoneShop   } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";


const categories = [
  {
    name: "Books & Study Materials",
    subcategories: ["Fiction", "Non-fiction", "Fantasy", "Textbooks & Reference Books", "Notebooks & Stationery"]
  },
  {
    name: "Electronic",
    subcategories: ["Mobile Phones & Tablets", "Laptops & Accessories", "Cameras", "Headphones & Speakers", "Smartwatches & Gadgets", "Desktops & Monitors", "Keyboards & Mice", "Wi-Fi Routers & Modems", "Cables & Adapters", "USB Hubs"]
  },
  {
    name: "Photography & Videography",
    subcategories: ["DSLR & Mirrorless Cameras", "Camera Accessories", "Lighting & Studio Equipment"]
  },
  {
    name: "Clothing & Accessories",
    subcategories: ["Formal Wear", "Casual Wear", "Shoes & Bags"]
  },
  {
    name: "Furniture & Home Essentials",
    subcategories: ["Desks & Chairs", "Beds & Mattresses", "Kitchen Appliances"]
  },
  {
    name: "Gaming & Accessories",
    subcategories: ["Gaming Consoles & Controllers", "VR Headsets & Simulators", "Gaming Chairs & Desks"]
  },
  {
    name: "Sports & Fitness",
    subcategories: ["Dumbbells & Resistance Bands", "Yoga Mats & Foam Rollers", "Footballs & Basketballs", "Cricket Bats & Kits", "Badminton & Tennis Rackets"]
  },
  {
    name: "Toy",
    subcategories: ["Action Figures", "Board Games", "Puzzles"]
  },
  {
    name: "Miscellaneous",
    subcategories: ["Sports & Fitness Equipment", "Hobby & Musical Instruments"]
  }
];

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      navigate(-1);
    }
  }, [auth.user]);

  const handleProfileClick = () => setOpen(!open);
  
  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // navigate(/search?q=${searchQuery});
  };

  const handleCategoryClick = (category) => {
    // navigate(/items?category=${encodeURIComponent(category)});
    setShowCategories(false);
  };

  const handleSubcategoryClick = (category, subcategory) => {
    // navigate(/items?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)});
    setShowCategories(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#E5D0CF]">
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="src/assets/swapify-with-logo.png" 
                alt="logo" 
                className="h-16 w-auto object-contain transition-transform "
              />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-7">

              {/* <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li> */}

              <li className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm gap-1"
                  onMouseEnter={() => setShowCategories(!showCategories)}
                  
                >
                  Categories
                  <KeyboardArrowDownIcon className='h-2 w-2 pr-2 '/>

                </button>
                
                {/* Mega Menu */}
                {showCategories && (
                  <div 
                    className="absolute left-0 mt-2 w-[1100px] bg-white shadow-xl rounded-lg p-6 overflow-y-auto max-h-72 transition-all duration-300 ease-in-out hover:max-h-[500px]"
                    onMouseLeave={() => setShowCategories(false)}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {categories.map((category) => (
                        <div key={category.name} className="space-y-3">
                          <button
                            onClick={() => handleCategoryClick(category.name)}
                            className="w-full text-left font-semibold text-black text-sm transition-all duration-300 transform hover:scale-110"
                          >
                            {category.name}
                          </button>
                          <div className="space-y-2 ml-2 border-l-2 border-gray-100 pl-3">
                            {category.subcategories.map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={() => handleSubcategoryClick(category.name, subcategory)}
                                className="block w-full text-left text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded px-2 py-1 transition-all duration-300 ease-in-out transform hover:translate-x-1"
                              >
                                {subcategory}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </li>
              {['Collections'].map((item) => (

                <li key={item}>
                  <Link
                    to={item=='Collections' && '/items'}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
                
              ))}
            </ul>


            {/* Search Bar */}
            <form 
              onSubmit={handleSearch} 
              className="hidden md:flex items-center max-w-xl w-full mx-4"
            >
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-blue-50  focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all duration-200 outline-none text-sm"
                /> 
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Right Side Icons */}
            <div className="hidden xl:flex items-center space-x-5 ">
              

              {auth.user ? (
                <div className="relative">
                  <button 
                    onClick={handleProfileClick}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
                  >
                    <span className="text-lg font-semibold">
                      {auth.user?.firstName[0].toUpperCase()}
                    </span>
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                      <button 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => navigate('/account')}
                      >
                        Account
                      </button>
                      <hr className="my-1" />
                      <button 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (


                <Link 
                  to="/signin" 
                  className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <IoMdLogIn className="h-6 w-6" />
                  <span className="text-sm font-semibold">Login</span>
                </Link>
              )}

            {/* sell icon  */}
              <Link 
                to="/sell-product" 
                className="group flex  items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                
                <AiTwotoneShop  className="h-6 w-6 "/>

                <span className="text-sm font-semibold">Sell</span>
              </Link>

              {/* wishlist  */}
              <Link 
                to="/wishlist" 
                className="group flex  items-center  space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <FavoriteBorderIcon className="h-6 w-6" />
                <span className="text-sm font-semibold ">Wishlist</span>
              </Link>

              {/* cart */}
              <button 
                onClick={() => navigate("/cart")}
                className="group flex  items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ShoppingCartOutlinedIcon className="h-6 w-6" />
                <span className="text-sm font-semibold ">Cart</span>
              </button>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;