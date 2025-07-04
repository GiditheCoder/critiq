import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import critiqHome from '../images/critiq-homepage.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignRoute = () => {
    navigate('/signup');
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.2)), url(${critiqHome})`,
      }}
      onClick={handleSignRoute}
    >
      <div className="px-10 sm:px-20 md:px-36 text-white">
        {/* Heading */}
        {loading ? (
          <Skeleton
            height={80}
            width={400}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2, marginBottom: '1rem' }}
          />
        ) : (
          <h1
            className={`text-[40px] sm:text-[64px] md:text-[96px] font-bold mb-4 transition-opacity duration-700 ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Power in your hands
          </h1>
        )}

        {/* Subtext */}
        {loading ? (
          <Skeleton
            height={40}
            width={300}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2, marginBottom: '1.5rem' }}
          />
        ) : (
          <p
            className={`text-[20px] sm:text-[28px] md:text-[32px] mb-6 font-light transition-opacity duration-700 ease-in-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            You decide the spotlight. <br />
            Stream. Vote
          </p>
        )}

        {/* Button */}
        {loading ? (
          <Skeleton
            height={50}
            width={180}
            baseColor="#A259FF"
            highlightColor="#E2CCFF"
            style={{ opacity: 0.2, borderRadius: '9999px' }}
          />
        ) : (
          <button
            className={`bg-[#A259FF] hover:bg-[#E2CCFF] text-white hover:text-[#A259FF] text-[18px] md:text-[20px] font-semibold py-3 px-10 rounded-full  duration-300 transition-opacity ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
