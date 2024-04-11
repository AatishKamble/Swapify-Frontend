import { useEffect } from "react";
const AddressEdit = ({setCurrentStep}) => {


    useEffect(()=>{
        window.scrollTo(1,1);
      })

    return (
        <>
        <div >
            <div className='w-[900px] h-auto bg-slate-200 rounded-xl  '>
                <div className='  bg-slate-700 px-2 flex items-center h-[40px] rounded-t-xl' onClick={()=>setCurrentStep(2)}>
                    <h2 className='text-blue-500 font-bold text-[1.25rem] '><span className='px-5'>Delivery Address</span></h2>
                </div>
                <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 ">
                    <div className="flex justify-between">
                        <div className="mb-4 w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mb-4 w-1/2 ml-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <div className="mb-4 w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                Mobile Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobileName"
                                type="text"
                                placeholder="mobile Name"
                            />
                        </div>
                        <div className="mb-4 w-1/2 ml-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locality">
                                Locality
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="locality"
                                type="text"
                                placeholder="Locality (optional)"
                            />
                        </div>
                    </div>


                    <div className='w-full'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            Address
                        </label>
                        <textarea rows={4}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                            id="Address"
                            type="text"
                            placeholder="Address "
                        />

                    </div>


                    <div className="flex justify-between">
                        <div className="mb-4 w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                City
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="city"
                                type="text"
                                placeholder="City"
                            />
                        </div>
                        <div className="mb-4 w-1/2 ml-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                State
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="state"
                                type="text"
                                placeholder="State"
                            />
                        </div>
                    </div>



                    <div className="flex justify-between">
                        <div className="mb-4 w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                Pincode
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="Pincode"
                                type="text"
                                placeholder="Pincode"
                            />
                        </div>

                    </div>


                    <div className="flex items-center justify-between">

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
               

               
 
            </div>
            <div className='justify-between bg-inherit px-9   py-10  flex items-center h-[40px] rounded-b-xl' >
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={()=>{
                      
                            setCurrentStep(0)}}
                    >
                        Previous
                    </button>

                    <button
                     type='button' 
                     className=' bg-blue-800 w-[100px] h-[40px] rounded-md font-bold ' 
                     onClick={()=>{
                      
                        setCurrentStep(2)}}>
                        Next
                        
                        </button>
                </div>
                </div>

        </>
    )
}

export default AddressEdit