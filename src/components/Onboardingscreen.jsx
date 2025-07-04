import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import critiqLogo from '../images/critiq-logo.png';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen = () => {
  const navigate = useNavigate();

  // we have 2 states, l loading and other loaded 
  // we set the laoading to the true
  // and we set the loaded to false initially 
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);


// we set the useEffect to setLoading to false and setLoaded to true and this hapens all in 1000 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleRoleScreen = () => {
    navigate('/role');
  };

  return (
    <div className="min-h-screen bg-[#0F0F1C] flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Logo Section */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        {loading ? (
          <Skeleton
            height={200}
            width={200}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2 }}
          />
        ) : (
          <img
            src={critiqLogo}
            alt="Critiq Logo"
            className={`w-40 sm:w-64 lg:w-[300px] h-auto object-contain transition-opacity duration-700 ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Welcome Content */}
      <div className="text-center mb-8 sm:mb-16">
        {loading ? (
          <Skeleton
            height={40}
            width={450}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2 }}
          />
        ) : (
          <h2
            className={`text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-0 sm:mb-6 transition-opacity duration-700 ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Welcome to Critiq!
          </h2>
        )}

        {loading ? (
          <Skeleton
            height={60}
            width={300}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2 }}
            className="mt-4"
          />
        ) : (
          <p
            className={`text-gray-400 hover:text-white text-base sm:text-lg border border-transparent hover:border-[#E2CCFF] rounded-lg px-6 sm:px-8 py-3 max-w-xl mx-auto duration-200 transition-opacity ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Discover, vote, and help shape tomorrow's top tracks.
          </p>
        )}
      </div>

      {/* Button */}
      {loading ? (
        <Skeleton
          height={50}
          width={180}
          baseColor="#A259FF"
          highlightColor="#E2CCFF"
          style={{ opacity: 0.2 }}
          borderRadius={9999}
        />
      ) : (
        // transition colors
        <button
          className={`bg-[#A259FF] hover:bg-[#E2CCFF] text-white hover:text-[#A259FF] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg  duration-300 ease-in-out shadow-lg mt-4 mb-3 cursor-pointer transition-opacity ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleRoleScreen}
        >
          Get Started
        </button>
      )}
    </div>
  );
};

export default OnboardingScreen;
