import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, register } from '../../State/Auth/Action.js';
import { Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';


const Register = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const auth=useSelector(store=>store.auth);
  useEffect(()=>{
   
    if(auth.jwt){
      
    dispatch(getUserProfile(auth.jwt));
    }
    
  },[auth.jwt]
  
  );
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("store:",auth)
    console.log("Registered from data :",form)
    dispatch(register(form));
    // navigate("/")
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    
  };

  return (
<<<<<<< HEAD
    <div className=" bg-[#C1E1DC] registration-container px-[50px] py-5 w-[600px] mx-auto my-11  rounded-xl shadow-md space-y-5 ">
      <p className="text-[30px] text-center font-extrabold font-serif ">User Registration</p>
=======
    <div className=" bg-[#e3f2fd] registration-container px-[50px] py-12 w-[600px] mx-auto my-11  rounded-xl shadow-md space-y-5 ">
      <p className="text-[30px] text-center font-extrabold ">User Registration</p>
>>>>>>> 1bbb1c2969b26baa0e1c72f22a6ef2ddc66c1461
      
      <form onSubmit={handleSubmit} >

        <div className='flex w-full justify-between '>
        <div className="form-group pb-[15px] ">
          <label htmlFor="firstName" className="block ">First Name:</label>
          <input
            placeholder='Enter First Name'
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border-gray-600 border-solid border-2 outline-none   p-2 rounded-md"
            required
          />
        </div>

        <div className="form-group pb-[15px]">
          <label htmlFor="lastName" className="block">Last Name:</label>
          <input
          placeholder='Enter Last Name'
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border-gray-600 border-solid border-2 outline-none p-2 rounded-md"
            required
          />
        </div>
        </div>
        <div className="form-group pb-[15px]">
          <label htmlFor="email" className="block">Email:</label>
          <input
          placeholder='Enter Email'
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-gray-600 border-solid border-2 outline-none p-2 rounded-md"
            required
          />
        </div>

        <div className="form-group pb-[15px] border-slate-500">
          <label htmlFor="password" className="block">Password:</label>
          <input
          placeholder='Enter Password'
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border-gray-600 border-solid border-2 outline-none  p-2 rounded-md"
            required
          />
        </div>
<div className='flex justify-center my-4 '>
        <button type="submit" className="w-full px-8  text-white bg-blue-500 hover:bg-[#283655] rounded-md py-2  ">Register</button>
    </div>  </form>
      <div className='flex justify-center text-[16px] font-semibold'>
      <p >Already registered?<Link to="/signin"> <span className='text-blue-500'> <button  className='underline font-bold '>Login</button></span> </Link> </p>
   </div> </div>
  );
};

export default Register;
