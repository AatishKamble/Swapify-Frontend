import {useEffect} from 'react'

const Payment = ({ setCurrentStep }) => {
    useEffect(()=>{
        window.scrollTo(1,1);
      })


    return (


        <div className='w-[800px] h-auto bg-inherit relative rounded-xl '>
            <div className='  bg-slate-700 px-2 flex items-center h-[40px] rounded-t-xl'>
                <h2 className='text-blue-500 font-bold text-[1.25rem] '><span className='px-5'>Payment Information</span></h2>
            </div>
            <form className="bg-inherit shadow-md rounded px-8 pt-6 pb-8 ">

                <div className='flex '>

                    <p className='text-[1.25rem] font-bold text-slate-500'>
                    Pay by Card
                    </p>


                </div>


                <div className='m-5 w-[500px] mx-auto'>
                    <div className="mb-4  mr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            Name Of card holder
                        </label>
                        <input
                            className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cardHolder"
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>

                    <div className="mb-4  mr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            Card Number
                        </label>
                        <input
                            className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cardNumber"
                            type="text"
                            placeholder="Enter  Card Number"
                        />
                    </div>


                    <div className='flex  justify-between'>



                        <div className="mb-4  mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                Expiry Month
                            </label>
                            <input
                                className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="ExpiryMonth"
                                type="month"
                                placeholder="Enter Expiry Month"
                            />
                        </div>



                        <div className="mb-4  mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                CVC
                            </label>
                            <input
                                className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="CVC"
                                type="text"
                                placeholder="Enter CVC"
                            />
                        </div>

                    </div>

                </div>


                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {

                            setCurrentStep(2)
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Place Order
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Payment