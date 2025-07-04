import React, { useState, useEffect } from 'react';
import critiqLogo from '../images/critiq-logo.png';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Role = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true); // trigger transition
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectScreen = () => {
    navigate('/select-vibe');
  };

  return (
    <div className="relative flex flex-col h-screen bg-[#0B0A1F] text-white px-4">
      {/* Logo in top-left */}
      <div className="absolute top-6 left-6">
        {loading ? (
          <div className="w-24 sm:w-36">
            <Skeleton
              height={150}
              width={150}
              baseColor="#A259FF"
              highlightColor="#E2CCFF"
              style={{ opacity: 0.2 }}
            />
          </div>
        ) : (
          <img
            src={critiqLogo}
            alt="Critiq Logo"
            className="w-24 sm:w-36 h-auto object-contain transition-opacity duration-700 ease-in-out"
          />
        )}
      </div>

      {/* Centered Content */}
      <div className="flex flex-1 justify-center items-center">
        <div className="text-center flex flex-col items-center max-w-md w-full">
          {loading ? (
            <>
              <Skeleton
                height={30}
                width={450}
                className="mb-10"
                style={{ opacity: 0.2 }}
                baseColor="#A259FF"
                highlightColor="#E2CCFF"
              />
              <Skeleton
                height={25}
                width={100}
                className="mb-4"
                baseColor="#A259FF"
                style={{ opacity: 0.2 }}
                highlightColor="#E2CCFF"
              />
              <Skeleton
                height={50}
                width={400}
                className="mb-4"
                style={{ opacity: 0.2, borderRadius: 999 }}
                baseColor="#A259FF"
                highlightColor="#E2CCFF"
              />
              <Skeleton
                height={50}
                width={400}
                style={{ opacity: 0.2, borderRadius: 999 }}
                baseColor="#A259FF"
                highlightColor="#E2CCFF"
              />
            </>
          ) : (
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-10 text-white">
                Choose which applies to you
              </h2>
              <p className="text-lg sm:text-xl font-semibold mb-6">I am</p>
              <div className="flex flex-col space-y-4 w-full">
                <button className="border border-purple-500 text-white text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 rounded-full w-full transition-colors duration-300 ease-in-out">
                  an artist
                </button>
                <button
                  onClick={handleSelectScreen}
                  className="bg-purple-500 text-white text-base sm:text-lg font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-full w-full hover:bg-[#E2CCFF] hover:text-[#A259FF] transition-colors duration-300 ease-in-out"
                >
                  a listener
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Role;
