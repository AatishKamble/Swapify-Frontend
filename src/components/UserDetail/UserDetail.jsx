import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import VerifiedIcon from '@mui/icons-material/Verified';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";
const UserDetail = ({ handleNext }) => {

    const auth = useSelector(store => store.auth)


  
    return (
        <>
            <div className='h-[400px] '>
                {auth.user &&
                    <div className='w-[800px] h-[130px] bg-slate-100 relative rounded-xl '>
                        <div className='  bg-slate-800 px-2 flex items-center h-[40px] rounded-t-xl'>
                            <h2 className='text-white font-bold text-[1.25rem] '><span className='text-white pe-2 my-2'><VerifiedIcon className="text-green-500 text-3xl" /></span><span>Login</span></h2>
                        </div>
                        <div className='flex items-center px-10 py-2 '>
                            <div>
                                <p className='text-[1rem]  font-sans pb-2'><span className=' font-bold '>Name: </span><span>{auth.user?.firstName} {auth.user?.lastName}</span></p>
                                <p className='text-[1rem]  font-sans'><span className=' font-bold '>Email: </span><span>{auth.user?.email}</span></p>
                            </div>
                        </div>

                        <div className=' w-[300px] absolute right-3 top-16 mt-2 flex justify-center font-semibold '>
                            <button className='text-blue-500 underline '>Logout and Signin with other account</button>
                        </div>



                        <div className=' py-10 mt-10 justify-end  px-10  flex items-center h-[40px] rounded-b-xl' onClick={() => handleNext(prev=>prev+1)}>
                            <button className='relative flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800  w-[100px] h-[40px] rounded-md font-bold ' ><FaArrowRight />
                                {/* Animation in the top-right corner */}
                            <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                            
                            </button>
                        </div>






                    </div>


                }


            </div>
        </>
    )
}

export default UserDetail