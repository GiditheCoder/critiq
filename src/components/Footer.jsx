import React, { useState } from 'react'

const Footer = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your submission logic here
  //   console.log('Form submitted:', formData);
  //   // Reset form
  //   setFormData({ name: '', email: '' });
  // };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        {/* Header Text */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-2">
            Subscribe to our news and get
          </h2>
          <p className="text-lg font-medium">
            latest updates
          </p>
        </div>

        {/* Form */}
        <form  className="space-y-4 mb-12">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#A259FF] hover:bg-[] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg"
          >
            Submit
          </button>
        </form>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          Copyright © 2025{' '}
          <span className="text-purple-400 font-medium">Critiq</span>
          . All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer