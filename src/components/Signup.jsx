import React from 'react';
import SignupImg from '../images/signup.png';
import { useNavigate } from 'react-router-dom';
import critiqLogo from '../images/critiq-logo.png';
import GoogleImg from '../images/google.png';
import lockIcon from '../images/lock.png';
import inquiryImg from '../images/inquiry.png';
import eyeIcon from '../images/eyeIcon.png';

const Signup = () => {
  const navigate = useNavigate();

  const handleSigninScreen = () => {
    navigate('/signin');
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-[#111827] flex flex-col justify-center items-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-2 flex justify-center">
            <img src={critiqLogo} alt="Critiq Logo" className="h-40 w-40" />
          </div>

          {/* Header */}
          <h2 className="text-2xl font-semibold text-white text-center">Create an account</h2>
          <p className="text-sm text-gray-400 text-center mb-6">Enter your details to create an account</p>

          {/* Email Input */}
          <div className="mb-4">
            <div className='flex items-center gap-2'>
            <label className="block text-sm text-white mb-1">Email Address <span className="text-red-500">*</span></label>
             <img src={inquiryImg} alt="inquiry" className="w-3 h-3  opacity-70" />
            </div>
            
            <div className="flex items-center bg-transparent border border-[#A259FF] rounded-md px-3 py-2">
              <img src={inquiryImg} alt="inquiry" className="w-4 h-4 mr-2 opacity-70" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
              <div className='flex items-center gap-2'>
    <label className="block text-sm text-white mb-1">Password <span className="text-red-500">*</span></label>
       <img src={inquiryImg} alt="inquiry" className="w-3 h-3 opacity-70" />
              </div>
           
            <div className="flex items-center bg-transparent border border-[#A259FF] rounded-md px-3 py-2">
              <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2 opacity-70" />
              <input
                type="password"
                placeholder="••••••••••"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
               <img src={eyeIcon} alt="lock" className="w-4 h-4 mr-2 opacity-70" />
            </div>
            <p className="text-xs text-gray-400 mt-1">12 characters min. Use upper case, lower case, number and symbol</p>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">

            <div className='flex items-center gap-2'>
    <label className="block text-sm text-white mb-1">Confirm Password <span className="text-red-500">*</span></label>
      <img src={inquiryImg} alt="inquiry" className="w-3 h-3 opacity-70" />
            </div>
            
            <div className="flex items-center bg-transparent border border-[#A259FF] rounded-md px-3 py-2">
              <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2 opacity-70" />
              <input
                type="password"
                placeholder="••••••••••"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
              <img src={eyeIcon} alt="lock" className="w-4 h-4 mr-2 opacity-70" />
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#A259FF] text-white py-3 rounded-md font-semibold hover:bg-[#9446f5] transition">
            Sign up
          </button>

          {/* Google Sign Up */}
          <button className="w-full border border-gray-600 mt-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <img src={GoogleImg} alt="Google" className="h-5 w-5" />
            <span className="text-white text-sm">Sign up with Google</span>
          </button>

          {/* Sign In Link */}
          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{' '}
            <span
              className="text-white cursor-pointer font-medium"
              onClick={handleSigninScreen}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          src={SignupImg}
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
