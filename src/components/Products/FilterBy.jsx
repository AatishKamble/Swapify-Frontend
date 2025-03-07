import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useLocation,useNavigate } from 'react-router-dom';

const FilterBy = ({ FilterByType, dataArray, More }) => {
    const [visible, setVisible] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [selected, setSelected] = useState([]);
    const [toShowElement, setToShowElement] = useState(dataArray.slice(0, 5));

    const location=useLocation();

    const history=useNavigate();
    
    const searchParams=new URLSearchParams(location.search);
  

    function handleVisibility() {
        setVisible(!visible);
    }

    function handleInputShow() {
        setShowInput(!showInput);
        setSearch('');
    }

    function handleSearch(event) {
        const searchValue = event.target.value;
        setSearch(searchValue);
        const searchResult = dataArray.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));
        // console.log(searchResult,"aatish");
        setSearchResult(searchResult);
    }
    function updateUrlParams(selectedValues){
        
        if (selectedValues.length > 0) {
            searchParams.delete(FilterByType);
            selectedValues.forEach(value => {
                searchParams.append(FilterByType, value);
            });
          
        } else {
            // If no items are selected, remove the parameter completely
            searchParams.delete(FilterByType);
        }
        history({ search: `?${searchParams.toString()}` });


    }

    useEffect(()=>{
        
        const selectedValues=searchParams.getAll(FilterByType);
        setSelected(selectedValues);
        setVisible(true);

    },[location.search,FilterByType])

    function handleInputChnage(event) {
        const value = event.target.value;
        setSelected(prevSelected => {
            if (prevSelected.includes(value)) {
                const updateSelected=prevSelected.filter(item => item !== value)
                updateUrlParams(updateSelected);
                return updateSelected;
            } else {
                const updatedSelected = [...prevSelected, value];
                updateUrlParams(updatedSelected);
                return updatedSelected;
            }
        });
    }

  

    useEffect(() => {
      
        const combinedItems = [...selected, ...dataArray.filter(item => !selected.includes(item))];
        setToShowElement(combinedItems.slice(0, 10));
    }, [selected, dataArray]);

    return (
        <>
            <div className=' h-12'>
     
                {showInput ? (
                    <div className='h-full mt-2 flex items-center justify-center '>
                        <input type="text" placeholder='search' value={search} className='ps-1 border px-2 py-1 border-blue-200 rounded-md text-[1.25rem] outline-none' onChange={handleSearch} />
                       <span className=' cursor-pointer ms-2'><CloseOutlinedIcon style={{ fontSize: "1.75rem" }} onClick={handleInputShow} /></span> 
                    </div>
                ) : (
                    <div className={`ps-4 flex items-center justify-start relative`}>
                        <p className='text-[1.2rem] font-semibold p-2'>{FilterByType}</p>
                        <span className='absolute right-2'>
                            {visible ? (
                                <span>{More && <SearchOutlinedIcon onClick={handleInputShow} />} <KeyboardArrowDownIcon onClick={handleVisibility} /></span>
                            ) : (
                                <KeyboardArrowRightIcon onClick={handleVisibility} />
                            )}
                        </span>
                    </div>
                )}
            </div>

            <div className={`overflow-hidden ${visible ? 'w-full h-auto pb-4 ps-4 pt-3 transition-all duration-300 ease-in-out' : 'hidden'}`}>
  <ul className="list-none bg-white shadow-lg rounded-xl p-3">
    {search ? (
      searchResult.map((item, index) => (
        <li key={index} className="text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name={item}
              value={item}
              checked={selected.includes(item)}
              className="h-5 w-5 accent-blue-500 rounded-md cursor-pointer"
              onChange={handleInputChnage}
            />
            <label htmlFor={item} className="cursor-pointer text-gray-800">{item}</label>
          </div>
        </li>
      ))
    ) : (
      toShowElement.map((item, index) => (
        <li key={index} className="text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <div className="flex items-center gap-3">
            {/* {console.log({item},"hiiiiiiii")} */}
            <input
              type="checkbox"
              name={item}
              value={item}
              checked={selected.includes(item)}
              className="h-5 w-5 accent-blue-500 rounded-md cursor-pointer"
              onChange={handleInputChnage}
            />
            <label htmlFor={item} className="cursor-pointer text-gray-800">{item}</label>
          </div>
        </li>
      ))
    )}
  </ul>
</div>

            
        </>
    );
}

export default FilterBy;
