
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const OrderDetail = () => {

    const steps = [
        "placed",
        "Order Confirmed",
        "Out For Delivery",
        "Deliverd"
    ];
    return (
        <>
        <div className='lg:mx-20'>
            <div className='bg-gray-200 h-auto p-1 w-auto m-2'>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            <div className=' bg-slate-100 h-40 w-auto p-2 m-2'>
                <p className='font-bold text-[1.25rem]'>Delivery Address</p>
                <p className='font-bold mt-1'>Aatish Kamble</p>
                <p className='font-normal'>lalalalal,lalalal,41102</p>
                <p className='font-bold mt-1'>Phone number</p>
                <p className='font-normal'>1111111111</p>
            </div>


            <div className="  bg-slate-100 h-auto w-auto p-2 m-2 flex items-center border-2 border-solid border-gray-300">
                <div className='h-28 bg-black w-28' >
                    <img src="#" alt=" product image" />
                </div>
                <div className='ms-10'>
                    <p className='font-bold my-1'>Powerlook</p>
                    <p className='font-normal text-[14px]'>Mandarin Collar Long Sleeves Opaque Casual Shirt</p>
                    <p className='font-normal me-4 inline-block mt-1'><span className='font-semibold'>Color: </span>red</p>
                    <p className='font-normal me-4 inline-block mb-2'><span className='font-semibold'>Size: </span>M</p>


                    <p className='font-normal me-4  mb-2'><span className='font-semibold'>Quantity: </span>2</p>
                    <p className='font-normal me-4  mb-2'><span className='font-semibold'>$</span>200</p>

                </div>




            </div>

            <div className='m-2 p-2 bg-slate-200' >
                <p className='font-bold text-[1.25rem]'>Order Detail</p>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>Invoice Number: </span>7888</p>

                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>Invoice Date: </span>M</p>

                    </div>


                    <div>
                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>Total: </span>$7888</p>

                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>Discount: </span>20%</p>

                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>GST: </span>18%</p>

                        <p className='font-normal me-4  mb-2'><span className='font-semibold'>Delivery Charges: </span>100</p>
                    </div>

                </div>

            </div>

            <div className='flex justify-center items-center bg-slate-500 h-10 mt-3 m-2'>
                <p className='font-extrabold'> Total Paid :8000</p>

            </div>
            </div>

        </>
    )
}

export default OrderDetail;