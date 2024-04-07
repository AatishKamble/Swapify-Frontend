import React, { useEffect } from 'react';
import products from '../../dataset.js';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterBy from './FilterBy.jsx';
import FilteredProducts from './FilteredProducts.jsx';
import Pagination from '@mui/material/Pagination';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DoneIcon from '@mui/icons-material/Done';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {findProducts} from "../../State/Product/Action.js";
const Products = () => {
  const uniqueCategories = ["Smartphones","Bikes"];
  const uniqueAddresses = ["maharashtra", "Gujrat", "Delhi", "Karnatka", "Rajshthan", "Tamilnadu", "Jammu Kashmir"]
  const sortByOptions = ["Date-Created", "Price: Low to High", "Price: High to Low"];
  const priceRange = ['1000-2000', '2000-3000', '3000-6000', '6000-10000', '>10000 '];
  const More = true;
  const location = useLocation();
  const history = useNavigate();

  const dispatch=useDispatch();


  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  
  let categoryValue = searchParams.getAll("Categories") ;
  let priceValue = searchParams.get("Price") || null;
  let sortValue = searchParams.get("sort");
  let pageNumber = searchParams.get("page")|| 1;
  
  useEffect(() => {
    let minPrice, maxPrice;
    if (priceValue !== null) {
       [minPrice, maxPrice] = priceValue.split("-").map(Number);

    }
    else{
      minPrice = 0;
    maxPrice = 1000000;
    }
console.log(categoryValue)
    const data = {
      category: categoryValue ,
      minPrice,
      maxPrice,
      sort: sortValue,
      pageNumber: pageNumber,
      pageSize: 10
    }
  
    
    dispatch(findProducts(data));

  },
    [
      priceValue,
      sortValue,
      pageNumber,
      categoryValue
    ])

  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  function handleDropDown() {
    setDropDown(!dropDown);


  }
  function updatedUrl(value) {

    if (value) {
      searchParams.delete('sort')
      searchParams.set("sort", value);
      searchParams.set("page",pageNumber)
    }

    history({ search: `?${searchParams.toString()}` });


  }
  function handleOptionChange(event) {
    const value = event.currentTarget.getAttribute('data-value');
    setSelectedOption(prevSelectedOption => {
      // if(!prevSelectedOption){
        let newOption;
        if(value ==="Price: Low to High"){
           newOption ="asc-price";
        }
        else if(value ==="Price: High to Low"){
          newOption ="desc-price";
        }
        else{
          newOption = value;
        }
       
      updatedUrl(newOption);
      return newOption;
      // }
      // else{
      //   return prevSelectedOption;
      // }
    })
    setDropDown(!dropDown);
  }

  useEffect(() => {
    const selected = searchParams.getAll('sort');
    setSelectedOption(selected[0]);
  }, [location.search]);

  useEffect(() => {

    if (location.pathname === "/items") {
      updatedUrl("Date-Created");
    }
  }, [location.pathname]);


  return (
    <>
      <div className='bg-slate-200 p-0 py-10 m-0 relative h-auto w-full mt-4 grid grid-cols-[280px,1fr]   justify-center'>



        <div className=' bg-slate-200  grid-cols-[280px,1fr] h-auto border-e-2   '>
          <div className='bg-slate-100 '>
            <div className=' px-5 h-[4rem] flex  items-center justify-between '>
              <p className='text-[1.5rem] font-bold '>Filters</p> <span><FilterListIcon /></span>
            </div>

            <FilterBy FilterByType="Categories" dataArray={uniqueCategories} More={More} />

            <FilterBy FilterByType="Location" dataArray={uniqueAddresses} More={More} />
            <FilterBy FilterByType="Price" dataArray={priceRange} More={!More} />


          </div>
        </div>



        <div className=' px-20  '>
          <div className=' col-span-full border-b-2 border-r-slate-800 mb-9 flex justify-end relative '>


            <div className='cursor-pointer absolute right-0 bottom-1 w-[250px]' onClick={handleDropDown}>
              <span className='m-2 text-neutral-900 font-semibold text-[1rem]'>SORT BY :</span>

              <span className=' text-neutral-900 font-normal text-[1rem] pe-6 '>{selectedOption}</span>
              <div className='relative  ms-5'>
                <span className=' text-neutral-900 font-normal text-[1rem] ms-2 absolute right-2 bottom-0'><FilterAltIcon /></span>

              </div>      </div>
            {
              dropDown ?
                (
                  <div className='bg-red-600 w-[250px] h-auto absolute top-2 z-50 right-2   '>
                    <div className='flex flex-col   w-full '>
                      {sortByOptions.map((item, index) => (
                        <div key={index} className='h-[2.5rem] ps-10 flex items-center hover:bg-orange-500 cursor-pointer' data-value={item} onClick={handleOptionChange}>
                          {selectedOption.toString() === item && <span className='me-5 absolute left-2'><DoneIcon /></span>}
                          <span>{item}</span>
                        </div>
                      ))}


                    </div>
                  </div>)
                :
                null
            }


          </div>


          <FilteredProducts />

        </div>

      </div>


    </>)
}

export default Products