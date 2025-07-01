import React from 'react';
import critiqLogo from '../images/critiq-logo.png';
import notificationIcon from '../images/notificationIcon.png';
import searchIcon from '../images/searchIcon.png';
// Header.jsx
const Header = () => {
  return (
    <div className="w-full pl-20 bg-[#0B0A1F] text-white flex items-center justify-between px-14 py-13 fixed top-0 left-0 z-40 h-[72px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={critiqLogo} alt="Critiq Logo" className="w-35 h-35 object-cover" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-8 text-[24px] font-normal">
        <button className="hover:text-purple-400 transition duration-200">TRENDING</button>
        <button className="hover:text-purple-400 transition duration-200">RECOMMENDED</button>
        <button className="hover:text-purple-400 transition duration-200">NEW RELEASED</button>
        <button className="hover:text-purple-400 transition duration-200">TOP CHARTS</button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img src={searchIcon} alt="Search" className="w-8 h-8 cursor-pointer" />
        <img src={notificationIcon} alt="Notifications" className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};


export default Header