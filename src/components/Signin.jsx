import React from 'react';
import critiqLogo from '../images/critiq-logo.png';
import GoogleImg from '../images/google.png';
import lockIcon from '../images/lock.png';
import inquiryImg from '../images/inquiry.png';
import eyeIcon from '../images/eyeIcon.png';
import signin from '../images/signin.png';

const Signin = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side Image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          src={signin}
          alt="Signin Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-[#111827] flex flex-col justify-center items-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <img src={critiqLogo} alt="Critiq Logo" className="h-40 w-40" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-white text-center mb-1">Sign in to your account</h2>
          <p className="text-sm text-gray-400 text-center mb-6">Welcome back! Enter your details</p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#A259FF] px-3 py-2 rounded-md">
              <img src={inquiryImg} alt="email icon" className="w-4 h-4 mr-2 opacity-70" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm text-white mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#A259FF] px-3 py-2 rounded-md">
              <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2 opacity-70" />
              <input
                type="password"
                placeholder="••••••••••"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
              <img src={eyeIcon} alt="eye" className="w-4 h-4 opacity-70 cursor-pointer" />
            </div>
            <p className="text-xs text-gray-400 mt-1">12 characters min. Use upper case, lower case, number and symbol</p>
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#A259FF]" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline text-white">Forgot Password</span>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#A259FF] text-white py-3 rounded-md font-semibold hover:bg-[#9446f5] transition">
            Sign in
          </button>

          {/* Google Sign In */}
          <button className="w-full border border-gray-600 mt-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <img src={GoogleImg} alt="Google" className="h-5 w-5" />
            <span className="text-white text-sm">Sign in with Google</span>
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-400 text-center mt-6">
            Don’t have an account?{' '}
            <span className="text-white font-medium cursor-pointer hover:underline">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
