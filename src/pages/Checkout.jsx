import { useEffect, useState } from "react";
import UserDetail from "../components/UserDetail/UserDetail.jsx";
import AddressEdit from "../components/AddressEdit/AddressEdit.jsx";
import Payment from "../components/PaymentDetails/Payment.jsx";
import OrderSummary from "../components/OrderSummarys/OrderSummary.jsx";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useLocation, useNavigate } from "react-router-dom";

const steps = ["Details", "Address", "Order Summary", "Payment"];

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    searchParams.set("step", currentStep);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  }, [currentStep]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 bg-gray-100">
      {/* Stepper */}
      <div className="w-full max-w-5xl px-4 py-6 bg-white shadow-lg rounded-lg">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      {/* Step Content */}
      <div className="w-full max-w-4xl flex justify-center bg-white shadow-lg rounded-lg p-10 mt-8">
        {currentStep === 0 && <UserDetail handleNext={setCurrentStep} />}
        {currentStep === 1 && <AddressEdit setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <OrderSummary setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <Payment setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};

export default Checkout;