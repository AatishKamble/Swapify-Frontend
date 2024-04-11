import { useEffect, useState } from "react"
import UserDetail from "../components/UserDetail/UserDetail.jsx";
import AddressEdit from "../components/AddressEdit/AddressEdit.jsx";
import Payment from '../components/PaymentDetails/Payment.jsx'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import OrderSummary from '../components/OrderSummarys/OrderSummary.jsx';

const steps = [
  'Details',
  'Address',
  'Order Summary',
  'Payment',
];
const Checkout = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams)
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {

    searchParams.set("step", currentStep);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });

  }, [currentStep])



  return (
    <>

      <div className='w-full h-auto bg-red-300 mt-10'>



        <div className='px-2 py-10'>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>


        </div>

        <div className="  flex px-[250px] pb-10 justify-center">
          {currentStep === 0 && <UserDetail handleNext={setCurrentStep} />}
          {currentStep === 1 && <AddressEdit setCurrentStep={setCurrentStep} />}
          {currentStep === 2 && <OrderSummary setCurrentStep={setCurrentStep} />}
          {currentStep === 3 && <Payment setCurrentStep={setCurrentStep} />}  </div>

      </div>


    </>
  )
}

export default Checkout