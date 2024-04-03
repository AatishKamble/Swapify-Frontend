import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    const isValid = username.includes("@");
    if (isValid) {
      alert("Email is valid!");
    } else {
      alert("Please enter a valid email address!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Username is required");
      return;
    }

    if (!password) {
      alert("Password is required");
      return;
    }

    validateEmail();

    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex  items-center h-screen bg-gray-100">
      <div
        className="bg-white ms-[100px] rounded-lg shadow-lg p-8 w-96"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src="../../src/assets/swapify-removebg.png"
            alt="Facebook"
            className=" h-[200px] w- object-cover"
          />
        </div>

        <h2 className="text-2xl text-center mb-6">
          <span className="bg-white font-semibold">Login</span>
        </h2>

        <form action="#" method="post" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Login
          </button>
        </form>
        <h2 className="text-center mt-4 text-gray-500">
          <span className="text-black">OR</span>
        </h2>

        <p className="text-center">
          <a href="#" className="text-blue-500">
            Forgot password?
          </a>
        </p>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/Signup"  className="no-underline mx-7">
          <button > Sign up</button>
          </Link>
        </p>

      </div>

{/* div 2 */}
      <div
        className="bg-white ms-[40px] h-auto w-[780px] rounded-lg shadow-lg p-8 w-96"
        style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src="../../src/assets/xchange.png"
            alt="ad"
            className="object-cover"
          />
        </div>
        <p className="text-center text-black-500 font-bold">
          Swap your way to savings and sustainability with Swapify.
        </p>
      </div>
    </div>
  );
};

export default Login;
