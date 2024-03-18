
import { useState } from "react";
import Title from '../FormTitle/Title.jsx'
import InputField from "../FormFields/InputField.jsx";

const Address = () => {

  //state
  const [isWork, setIsWork] = useState(false);
  const [formData, setFormData] = useState({
    openSaturday: false,
    openSunday: false,
    defaultAddress: false
  });


  
  //showing work options 

  function handleWorkClick() {

    setIsWork(true);
  }

  function handleHomeClick() {

    setIsWork(false);
  }


  //form handling
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted successfully", formData);
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        console.log(key + ": " + formData[key]);
      }
    }
  }

  //checkbox handling
  function handleCheckbox(event) {
    const { name, checked } = event.target;

    setFormData(formData => ({
      ...formData,
      [name]: checked
    }));
  }





  return (
    <>
      <div className="grid auto-cols-auto auto-rows-auto gap-y-5 grid-rows-1 justify-center align-middle mt-[100px] bg-white w-auto ">
        <Title title="Address" subtitle="Edit Your Address" />


        <div className="font-bold md:m-[30px] m-[5px] h-auto border-[1px] border-solid border-[#2d2d2d] w-auto p-[5px] md:p-[30px] ">
          <form onSubmit={handleSubmit} method='get'>
            <h2>Contact details</h2>

            <InputField type="text" name="fullName" lableText="Full Name" setFormData={setFormData} value={formData.fullName ||""}/>
            <InputField type="tel" name="phone" lableText="Mobile Number" setFormData={setFormData} value={formData.phone ||""}/>

            <h2>Address</h2>

            <InputField type="text" name="pincode" lableText="Pincode" setFormData={setFormData} value={formData.pincode ||""}/>
            <InputField type="text" name="address" lableText="Address(House No,building,area,street)" setFormData={setFormData} value={formData.address ||""} />
            <InputField type="text" name="locality" lableText="Locality/Town" setFormData={setFormData} value={formData.locality ||""}/>

            <div className="flex flex-col md:flex-row ">

              <InputField type="text" name="city" lableText="City" setFormData={setFormData} value={formData.city ||""} />
              <InputField type="text" name="state" lableText="State" setFormData={setFormData} value={formData.state ||""} />

            </div>

            <h2 className="mb-[20px]">Save Address As</h2>
            <div className="md:w-[300px] w-[200px] h-[25px] flex  ms-[35px] ">
              <button className="h-[30px] w-[100px] text-[15px] font-bold font-['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif] text-[#000000] rounded-xl border-2 border-solid border-[#181717] mb-[10px] me-[10px] ms-[10px] "
                type="button" onClick={handleHomeClick} style={{ borderColor: isWork ? "" : "red", color: isWork ? "" : "red" }}>Home</button>
              <button className="h-[30px] w-[100px] text-[15px] font-bold font-['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif] text-[#000000] rounded-xl border-2 border-solid border-[#181717] mb-[10px] me-[10px] ms-[10px] " type="button" onClick={handleWorkClick} style={{ borderColor: isWork && "red", color: isWork ? "red" : "" }}>Work</button>

            </div>
            {isWork && <div className="flex flex-col m-[20px] text-[15px] mb-[20px]">

              <div className="mt-[20px]  ms-[30px]">
                <input type="checkbox" name="openSaturday" checked={formData.openSaturday} className=" scale-100 border-2 border-solid border-[#151212]" onChange={handleCheckbox} />
                <label htmlFor="openSaturday" className="md:text-[15px] text-[14px] font-['Times New Roman', Times, serif] mt-[10p] ms-[10px] font-normal" >Open On Saturday</label>
              </div>
              <div className="md:mt-[20px] mt-[10px] ms-[30px]">
                <input type="checkbox" name="openSunday" checked={formData.openSunday} className="scale-100 border-2 border-solid border-[#151212]" onChange={handleCheckbox} />
                <label htmlFor="openSunday" className="md:text-[15px] text-[14px] font-['Times New Roman', Times, serif] md:mt-[5px] ms-[10px] font-normal">Open On Sunday</label>
              </div>
            </div>}

            <div className=" font-normal mt-[50px] md:ms-[50px] ms-[20px] flex justify-start">
              <input type="checkbox" name="defaultAddress" checked={formData.defaultAddress} className="scale-100 border-2 border-solid border-[#151212] text-[15px]" onChange={handleCheckbox} />
              <label htmlFor="defaultAddress" className="ms-[20px] md:text-[15px] text-[14px]">Make this my default address</label>

            </div>



            <div className="flex justify-center align-middle md:mt-[90px] mt-[40px]">
              <button className="md:w-[250px] w-auto p-[5px] mx-[20px] border-2 border-solid border-[#080119] rounded md:text-[18px] text-[16px] mb-[30px] bg-[#e90376c4] h-[35px] ">Save Address Details</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Address;