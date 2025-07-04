import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import faveImg from '../images/fave.png';
import folaImg from '../images/fola.png';
import ruger from '../images/ruger.png';
import asaIcon from '../images/asa.png';
import chikeImg from '../images/chike.png';
import olamideIcon from '../images/olamide.png';

const FeaturedArtiste = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const artists = [
    { name: 'Fave', image: faveImg },
    { name: 'Fola', image: folaImg },
    { name: 'Ruger', image: ruger },
    { name: 'Asa', image: asaIcon },
    { name: 'Chike', image: chikeImg },
    { name: 'Olamide', image: olamideIcon },
  ];

  return (
    <div className="bg-[#0F0F1A] py-6 px-4 w-full">
      {/* Heading */}
      {loading ? (
        <div className="px-10 mb-4">
          <Skeleton height={40} width={240} baseColor="#A259FF" highlightColor="#E2CCFF"  style={{ opacity: 0.2 }} />
        </div>
      ) : (
        <h2
          className={`text-white text-[32px] font-bold mb-4 px-10 transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Featured Artists
        </h2>
      )}

      {/* Artist Carousel */}
      <div className="relative flex items-center">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth ml-10 mr-10">
          {loading
            ? Array(6)
                .fill()
                .map((_, index) => (
                  <div key={index} className="flex flex-col items-center w-full">
                    <Skeleton
                      height={250}
                      width={250}
                      baseColor="#A259FF"
                      highlightColor="#E2CCFF"
                      
                      style={{ borderRadius: '12px' , opacity: 0.2 }}
                    />
                    <Skeleton
                      height={20}
                      width={120}
                      baseColor="#A259FF"
                      highlightColor="#E2CCFF"
                       style={{ opacity: 0.2 }}
                      className="mt-2"
                    />
                  </div>
                ))
            : artists.map((artist, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center w-full transition-opacity duration-700 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 text-[24px] text-left font-bold">{artist.name}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtiste;
