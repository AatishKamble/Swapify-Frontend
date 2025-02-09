import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getUserProfile, login } from "../../State/Auth/Action.js";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUserProfile(auth.jwt));
    }
  }, [auth.jwt, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex gap-8 w-full max-w-6xl mx-auto">
        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img
              src="../../src/assets/swapify-removebg.png"
              alt="Swapify Logo"
              className="h-32 object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <div className="text-center">
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Forgot your password?
              </Link>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>
              <Link to="/signup" className="ml-2 text-blue-600 hover:text-blue-700 font-medium">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="hidden lg:block bg-white rounded-xl shadow-md p-8 w-full max-w-2xl">
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="../../src/assets/xchange.png"
                alt="Swapify Features"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-800 mt-6">
              Swap your way to savings and sustainability with Swapify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;