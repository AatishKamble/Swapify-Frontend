import React, { useState } from 'react';


const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.firstName && form.lastName && form.email && form.password) {
      // Here you can add your registration logic
      // For demonstration purposes, let's just log the values
      console.log('Form values:', form);

      // Clear form fields
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      // Display success message
      setStatusMessage('Registration successful!');

      // Hide message after 3 seconds
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
    } else {
      setStatusMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="registration-container p-[50px] w-[600px] mx-auto my-11  rounded-xl shadow-md space-y-5 p-2">
      <h2 className="text-2xl font-bold text-center">User Registration</h2>
      
      <form onSubmit={handleSubmit} >
        <div className="form-group pb-[15px]">
          <label htmlFor="firstName" className="block">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-0 p-2"
            required
          />
        </div>

        <div className="form-group pb-[15px]">
          <label htmlFor="lastName" className="block">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-0 p-2"
            required
          />
        </div>

        <div className="form-group pb-[15px]">
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-0 p-2"
            required
          />
        </div>

        <div className="form-group pb-[15px]">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-0 p-2"
            required
          />
        </div>

        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Register</button>
      </form>
      {statusMessage && <p className="text-center text-green-500">{statusMessage}</p>}
      <p className=" text-center font-bold "> Welcome to Swapify</p>
    </div>
  );
};

export default Register;
