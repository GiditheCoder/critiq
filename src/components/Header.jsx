import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import critiqLogo from '../images/critiq-logo.png';
import notificationIcon from '../images/notificationIcon.png';
import searchIcon from '../images/searchIcon.png';

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full pl-20 bg-[#0B0A1F] text-white flex items-center justify-between px-14 py-13 fixed top-0 left-0 z-40 h-[72px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {loading ? (
          <Skeleton
            height={40}
            width={100}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2, borderRadius: '8px' }}
          />
        ) : (
          <img
            src={critiqLogo}
            alt="Critiq Logo"
            className={`w-[100px] h-auto object-contain transition-opacity duration-700 ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-8 text-[20px] font-normal">
        {loading ? (
          <>
            <Skeleton width={100} height={20} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }} />
            <Skeleton width={140} height={20} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }}  />
            <Skeleton width={160} height={20} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }}  />
            <Skeleton width={120} height={20} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }} />
          </>
        ) : (
          <>
            {['TRENDING', 'RECOMMENDED', 'NEW RELEASED', 'TOP CHARTS'].map((item) => (
              <button
                key={item}
                className={`hover:text-purple-400 transition duration-200 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {loading ? (
          <>
            <Skeleton circle width={32} height={32} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }} />
            <Skeleton circle width={32} height={32} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }} />
          </>
        ) : (
          <>
            <img
              src={searchIcon}
              alt="Search"
              className={`w-8 h-8 cursor-pointer transition-opacity duration-700 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src={notificationIcon}
              alt="Notifications"
              className={`w-8 h-8 cursor-pointer transition-opacity duration-700 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
