
import VerifiedIcon from '@mui/icons-material/Verified';
import Title from "../FormTitle/Title";
import InputField from "../FormFields/InputField";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
function ProfileEdit() {
  const [formData, setFormData] = useState({
  });

  const [isEdit, setIsEdit] = useState(false);

  //handling form submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted successfully", formData);
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        console.log(key + ": " + formData[key]);
      }
    }
    alert("form submitted");
  }

  function handleChangeButton(){
    setIsEdit(!isEdit);
  }


  //handleGenderButtonClick
  function handleGenderButtonClick(gender) {
    setFormData(formData => ({ ...formData, gender: formData.gender === gender ? null : gender }));
  }

  return (
    <div className="grid auto-cols-auto auto-rows-auto gap-y-5 grid-rows-1 justify-center item-center mt-[100px] bg-white w-auto mb-[30px]  ">
      <Title title="Profile Edit" subtitle="Edit your details " />
      <div className="font-bold md:m-[30px] h-auto border-[1px] border-solid border-[#2d2d2d] w-auto  md:p-[30px] p-[5px]">
        <form className="w-[100%]   " onSubmit={handleSubmit}>

          {isEdit?

            <InputField type="phone" name="mobileNumber" lableText="Mobile Number "setFormData={setFormData} value={formData.mobileNumber || ""}  />

            :
          <div className="flex justify-between align-middle h-[50px] p-[20px] m-[20px]  ">
            <div >
              <p className="text-[#5d5b5b] font-bold md:text-[14px] text-[12px] "> Mobile Number*</p>
              <p className="md:text-[14px] text-[12px] text-black font-bold ">1111111111<span className=" text-green-700 text-[16px] ms-[5px]"><VerifiedIcon className="text-[16px] md:text-[18px] " /></span></p>

            </div>

            <button  className= {isEdit?'hidden':"md:text-[18px] text-[16px] md:font-bold font-normal h-[35px] md:w-[130px] w-[50px] mt-[5px] rounded-md md:border-2 border-1  border-solid border-[#8a8989] font-['Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif] bg-[#e9eae3] md:me-[15px] me-[0px]"} onClick={handleChangeButton}><span className="hidden md:block">Change</span> <span className="black md:hidden"><EditIcon /></span></button>


          </div>}
          <InputField type="text" name="fullName" lableText="Full Name" setFormData={setFormData} value={formData.fullName || ""} />
          <InputField type="email" name="email" lableText="Email" setFormData={setFormData} value={formData.email || ""} />
          <div className="h-[50px] md:ps-[20px] md:pe-[20px]   flex   m-[20px]   justify-between md:gap-3 ">
            <div className="  h-[35px] md:w-[230px] w-[100px] md:ms-[5px] text-[15px] font-bold flex align-middle justify-center relative bg-inherit border-2 border-solid border-[#cacac6] p-[5px] " onClick={() => handleGenderButtonClick("male")} ><span className={formData.gender === "male" ? 'mx-1 absolute md:left-14 left-1' : ' hidden'}><DoneIcon /></span><span>Male</span></div>
            <div className=" h-[35px] md:w-[230px] w-[100px] text-[15px] font-bold flex align-middle relative justify-center bg-inherit border-2 border-solid border-[#cacac6] p-[5px] pe-0" onClick={() => handleGenderButtonClick("female")} ><span className={formData.gender === "female" ? 'mx-1 absolute md:left-14 left-[2px]' : ' hidden'}><DoneIcon /></span><span className='ms-1'>Female</span></div>

          </div>

          <div className="md:w-[300px] w-auto ">
            <InputField type="date" name="birthDate" lableText="Birthdate" setFormData={setFormData} value={formData.birthDate || ""} />
          </div>
          <div className=" flex justify-center align-middle mt-[90px]">
            <button className="md:w-[250px] w-[100%] mx-[20px] border-2 border-solid border-[#080119] rounded text-[18px] mb-[30px] bg-[#e90376c4] h-[35px] ">Save Details</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ProfileEdit;

