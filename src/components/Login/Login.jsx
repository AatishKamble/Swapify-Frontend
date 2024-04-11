import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getUserProfile, login} from "../../State/Auth/Action.js"
const Login = () => {

  const dispatch=useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth=useSelector(store=>store.auth);

  useEffect(()=>{
   
    if(auth.jwt){
    
    dispatch(getUserProfile(auth.jwt));
    }
    
  },[auth.jwt]
  
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData={
      email:username,
       password:password
    }

    dispatch(login(userData));
   
    setUsername("");
    setPassword("");
    
  };

  return (
    <div className="flex  items-center h-[650px] bg-100">
      <div
        className="bg-white ms-[100px] rounded-lg shadow-lg p-8 w-96"
        style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src="../../src/assets/swapify-removebg.png"
            alt="logo"
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
            className="w-full bg-blue-500 hover:bg-[#283655] text-white font-semibold py-2 px-4 rounded-md shadow-md"
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

        <p className="text-center m-0">
         <span> Don't have an account?</span>
          <Link to="/signup"  className="no-underline ms-2">
          <button className="text-blue-600" >Sign up</button>
          </Link>
        </p>

      </div>

{/* div 2 */}
      <div
        className="bg-white ms-[40px] h-auto w-[780px] rounded-lg shadow-lg p-8 "
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
